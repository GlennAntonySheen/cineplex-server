export default class BookingModel {
    constructor() {
        this.bookings = []
    }

    getBookings() {
        return this.bookings
    }

    addBooking(bookingDetails) {
        this.bookings.push(bookingDetails)
        // console.log('after updating', this.bookings)
    }
}

