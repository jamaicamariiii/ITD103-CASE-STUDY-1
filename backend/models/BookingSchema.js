// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
      type: String,
      required: true
    },
    cleaningService: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending"
    },
    isPaid: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
