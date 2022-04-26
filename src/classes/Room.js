import Booking from "./Booking"
class Room {
    constructor (roomData, bookingsData) {
        this.roomNum = roomData.number;
        this.cost = roomData.costPerNight;
        this.bedSize = roomData.bedSize;
        this.numBeds = roomData.numBeds; 
        this.bookings = this.getBookings(bookingsData);
        this.datesBooked = this.getDatesBooked();
        this.typeOfRoom = this.getRoomType(roomData);
    }

    getRoomType(roomData) {
        if (roomData.roomType.includes("single")){
            return "single";
        } else if (roomData.roomType.includes("junior")) {
            return "junior";
        } else if (roomData.roomType.includes("suite")) {
            return "residential"
        } else {
            return
        }
    }

    getBookings(bookingsData) {
        let bookingsArr = [];
        bookingsData.forEach((booking) => {
            if(booking.roomNumber === this.roomNum) {
                bookingsArr.push(new Booking(booking))
            }
        })
        return bookingsArr
    } 

    getDatesBooked() {
        let datesBooked = [];
        this.bookings.forEach((booking) => {
            datesBooked.push(booking.date)
        })
        return datesBooked
    }

    checkIfBooked(date) {
        if(this.datesBooked.includes(date)) {
            return false;
        } else {
            return true;
        }
    }
}

export default Room;