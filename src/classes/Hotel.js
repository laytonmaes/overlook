import Room from "./Room"
import Booking from "./Booking"
import Customer from "./Customer"

class Hotel {
    constructor (roomsArr,bookingsArr, customersArr) {
        this.date = this.getDate();
        this.rooms = this.getRooms(roomsArr, bookingsArr);
        this.customers = this.getCustomers(customersArr, bookingsArr,roomsArr)
    }

    getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy + '/' + mm + '/' + dd;
    }

    getRooms(roomsArr, bookingsData) {
        let roomsInfo = []
        roomsArr.forEach((room) => {
            roomsInfo.push(new Room(room, bookingsData))
        }) 
        return roomsInfo
    }

    getCustomers(customersArr, bookingsData, roomsData) {
        let customersInfo = [];
        customersArr.forEach((customer) => {
            customersInfo.push(new Customer(customer, bookingsData, roomsData))
        })
        return customersInfo;
    }
}

export default Hotel;