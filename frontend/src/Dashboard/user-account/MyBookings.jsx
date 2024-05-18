import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the Calendar CSS

// Define an ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error errMessage="Something went wrong. Please try again later." />;
    }

    return this.props.children;
  }
}

const MyBookings = () => {
    const { data: appointments, loading, error, refetchData } = useFetchData(`${BASE_URL}/bookings`);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [bookingData, setBookingData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        cleaningService: '',
        appointmentDate: null, // Add date field
        appointmentTime: '', // Add time field
    });
    const [bookingMessage, setBookingMessage] = useState('');
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [chart, setChart] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
    const [bookedDates, setBookedDates] = useState([]); // State to store the booked dates

    useEffect(() => {
        if (appointments.length > 0) {
            const bookedDates = appointments.map(appointment => new Date(appointment.appointmentDate));
            setBookedDates(bookedDates);
        }
    }, [appointments]);

    useEffect(() => {
        // Create the chart when component mounts
        const ctx = document.getElementById('serviceChart');
        if (ctx && appointments.length > 0) {
            const services = {};
            appointments.forEach(appointment => {
                if (appointment.cleaningService in services) {
                    services[appointment.cleaningService]++;
                } else {
                    services[appointment.cleaningService] = 1;
                }
            });
            const serviceLabels = Object.keys(services);
            const serviceData = Object.values(services);
    
            // Destroy previous chart instance if exists
            if (chart) {
                chart.destroy();
            }
    
            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: serviceLabels,
                    datasets: [{
                        label: 'Services',
                        data: serviceData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: false, // Disable responsiveness
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Percentage of Services Booked'
                        }
                    }
                }
            });
            setChart(myChart);
        }
    }, [appointments]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().split(' ')[0];
        return { date, time };
    };

    const handleBookAppointment = () => {
        setShowBookingForm(true);
    };

    const handleEditBooking = (appointmentId) => {
        const selectedAppointment = appointments.find(appointment => appointment._id === appointmentId);
        if (selectedAppointment) {
            setBookingData({
                name: selectedAppointment.name,
                address: selectedAppointment.address,
                phoneNumber: selectedAppointment.phoneNumber,
                cleaningService: selectedAppointment.cleaningService,
                date: selectedAppointment.date, // Update date field
                time: selectedAppointment.time, // Update time field
            });
            setSelectedBookingId(appointmentId);
            setShowBookingForm(true);
        }
    };

    const handleDeleteBooking = async (appointmentId) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            try {
                const response = await fetch(`${BASE_URL}/bookings/${appointmentId}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setBookingMessage('Booking deleted successfully!');
                    await refetchData();
                } else {
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }
            } catch (error) {
                console.error('Error:', error);
                setBookingMessage('Failed to delete booking. Please try again later.');
            }
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let url = `${BASE_URL}/bookings`;
            let method = 'POST';
            const { date, time } = bookingData;
            const updatedBookingData = { ...bookingData };
            if (selectedBookingId) {
                url += `/${selectedBookingId}`;
                method = 'PUT';
            }
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBookingData),
            });
            if (response.ok) {
                const message = selectedBookingId ? 'Booking updated successfully!' : 'Appointment booked successfully!';
                setBookingMessage(message);
                setShowBookingForm(false);
                setBookingData({
                    name: '',
                    address: '',
                    phoneNumber: '',
                    cleaningService: '',
                    appointmentDate: null, // Reset date field
                    appointmentTime: '', // Reset time field
                });
                setSelectedBookingId(null);
                await refetchData();
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            setBookingMessage(selectedBookingId ? 'Failed to update booking. Please try again later.' : 'Failed to book appointment. Please try again later.');
        }
    };

    return (
        <ErrorBoundary> {/* Wrap the entire component with ErrorBoundary */}
            <div>
                {loading && !error && <Loading />}
                {error && !loading && <Error errMessage={error} />}
                {!loading && !error && (
                    <div>
                        <h2 className="text-lg font-semibold mb-3"></h2>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cleaning Service</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {appointments.map(appointment => (
                            <tr key={appointment._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.phoneNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.cleaningService}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.appointmentDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.appointmentTime}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{appointment.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={() => handleEditBooking(appointment._id)} className="mr-2 text-xs text-blue-500">Edit</button>
                                    <button onClick={() => handleDeleteBooking(appointment._id)} className="text-xs text-red-500">Delete</button>
                                </td>
                            </tr>
))}

                            </tbody>
                        </table>
                    </div>
                )}
                {!loading && !error && appointments.length === 0 && (
                    <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">You did not book yet!</h2>
                )}
                <div className="flex mt-5">
                    <div className="mr-8">
                        <canvas id="serviceChart" width="400" height="500"></canvas>
                    </div>
                    <div>
                        <Calendar
                            onChange={setSelectedDate}
                            value={selectedDate}
                            tileContent={({ date, view }) =>
                                view === 'month' && bookedDates.some(bookedDate => bookedDate.toDateString() === date.toDateString()) ? <p>Booked</p> : null
                            }
                        />
                    </div>
                </div>
                <div className="mt-5">
                    {!showBookingForm ? (
                        <button onClick={handleBookAppointment} className="bg-primaryColor bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Book Appointment
                        </button>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input type="text" name="name" value={bookingData.name} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Address:</label>
                                <input type="text" name="address" value={bookingData.address} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                <input type="text" name="phoneNumber" value={bookingData.phoneNumber} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Cleaning Service:</label>
                                <select name="cleaningService" value={bookingData.cleaningService} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full">
                                    <option value="">Select Cleaning Service</option>
                                    <option value="Eco-friendly cleaning">Eco-friendly cleaning</option>
                                    <option value="Green home cleaning">Green home cleaning</option>
                                    <option value="Sustainable office cleaning">Sustainable office cleaning</option>
                                    <option value="Organic carpet and upholstery cleaning">Organic carpet and upholstery cleaning</option>
                                    <option value="Green commercial cleaning">Green commercial cleaning</option>
                                    <option value="Natural floor maintenance">Natural floor maintenance</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Date:</label>
                                <input type="date" name="date" value={bookingData.date} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Time:</label>
                                <input type="time" name="time" value={bookingData.time} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" />
                            </div>
                            <button type="submit" className="bg-primaryColor bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                {selectedBookingId ? 'Update Booking' : 'Confirm Booking'}
                            </button>
                        </form>
                    )}
                    {bookingMessage && <p className="mt-2 text-green-600">{bookingMessage}</p>}
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default MyBookings;
