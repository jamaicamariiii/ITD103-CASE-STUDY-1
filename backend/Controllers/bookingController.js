import Booking from "../models/BookingSchema.js";

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { name, address, phoneNumber, date, time, cleaningService } = req.body;

        // Validate request body
        if (!name || !address || !phoneNumber || !date || !time || !cleaningService) {
            return res.status(400).json({ success: false, message: "Please provide all required fields" });
        }

        // Create a new booking
        const newBooking = new Booking({
            name,
            address,
            phoneNumber,
            appointmentDate: date, // Assuming date format matches the schema
            appointmentTime: time,
            cleaningService,
            user: req.userId // Assuming you have user authentication and userId available in req
        });

        // Save the booking to the database
        await newBooking.save();

        res.status(201).json({ success: true, message: "Booking created successfully", data: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ success: false, message: "Failed to create booking" });
    }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId }); // Assuming you want to get bookings for the authenticated user only

        res.status(200).json({ success: true, data: bookings });
    } catch (error) {
        console.error("Error getting bookings:", error);
        res.status(500).json({ success: false, message: "Failed to get bookings" });
    }
};

// Update a booking
export const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, phoneNumber, date, time, cleaningService } = req.body;

        // Validate request body
        if (!name || !address || !phoneNumber || !date || !time ||  !cleaningService) {
            return res.status(400).json({ success: false, message: "Please provide all required fields" });
        }

        // Find the booking by ID
        let booking = await Booking.findById(id);

        // Check if the booking exists
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        // Update booking details
        booking.name = name;
        booking.address = address;
        booking.phoneNumber = phoneNumber;
        booking.cleaningService = cleaningService;
        booking.appointmentDate = date;
        booking.appointmentTime = time;

        // Save the updated booking
        await booking.save();

        res.status(200).json({ success: true, message: "Booking updated successfully", data: booking });
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ success: false, message: "Failed to update booking" });
    }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the booking by ID and delete it
        const deletedBooking = await Booking.findByIdAndDelete(id);

        // Check if the booking exists
        if (!deletedBooking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        res.status(200).json({ success: true, message: "Booking deleted successfully", data: deletedBooking });
    } catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ success: false, message: "Failed to delete booking" });
    }
};
