// routes/bookingRoutes.js

import express from 'express';
import { createBooking, getAllBookings, updateBooking, deleteBooking} from '../Controllers/bookingController.js';


import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// Create a new booking
router.post('/', createBooking);
router.get('/',  getAllBookings); 
router.put('/:id', updateBooking);
router.delete('/:id',deleteBooking);


export default router;
