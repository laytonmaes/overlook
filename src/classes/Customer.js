import Booking from "./Booking"
class Customer {
    constructor (customerData, bookingsArr, roomsArr) {
        this.id = customerData.id;
        this.name = customerData.name;
        this.bookings = this.getBookings(bookingsArr);
        this.moneySpent = this.addTotalCosts(roomsArr);
    }

    getBookings(bookingsArr) {
        let bookings = []
        bookingsArr.forEach((booking) => {
            if(booking.userID === this.id) {
                bookings.push(new Booking(booking))
            }
        })
        return bookings
    }

    addTotalCosts(roomsArr) {
        let totalCost = 0;
        this.bookings.forEach((booking) => {
            roomsArr.forEach((room) => {
                if (booking.room === room.number) {
                    totalCost += room.costPerNight
                }
            })
        })
        totalCost = totalCost.toFixed(2);
        return totalCost;
    }
}

export default Customer;