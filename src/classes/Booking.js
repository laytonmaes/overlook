class Booking {
    constructor (bookingsData) {
        this.id = bookingsData.id;
        this.userId = bookingsData.userID;
        this.date = bookingsData.date;
        this.room = bookingsData.roomNumber;
    }
}

export default Booking;