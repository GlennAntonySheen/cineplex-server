import express from 'express';
import BookingModels from '../models/bookingModel.js'

const router = express.Router()
const bookingModels = new BookingModels()

router.get('/', (req, res) => {
    console.log(bookingModels)
    res.send('inside get of bookings')
})

router.post('/addBooking', (req, res) => {
    bookingModels.addBooking(req.body)
    console.log(bookingModels.getBookings())
    res.send(`Added new booking`)
})


export default router