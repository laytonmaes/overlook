// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Customer from './classes/Customer';
import Hotel from './classes/Hotel';
import Room from './classes/Room';
import Booking from './classes/Booking';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//------------------- api calls -------------------//
import apiCalls from './apiCalls';

//------------------- query selectors -------------------//
const totalSpent = document.getElementById("totalSpent")
const welcomeMessage = document.getElementById("welcomeMessage")

const tagSuite = document.querySelector(".suite-tag")
const tagJunior = document.querySelector(".junior-tag")
const tagSingle = document.querySelector(".single-tag")

const roomsSelect = document.querySelector(".rooms")
const bookingsPastSelect = document.getElementById("pastBookings")
const bookingsFutureSelect = document.getElementById("upcomingBookings")

const inputDate = document.querySelector(".date")
const inputUsername = document.querySelector("#username")
const inputPassword = document.querySelector("#password")
const buttonLogin = document.querySelector("#loginButton")

//------------------- event listeners -------------------//
buttonLogin.addEventListener("click", (e) => {
    e.preventDefault()
    logIn()
})

tagJunior.addEventListener("click", () => {
    filterRoomsByTag("junior")
    displayFilteredRooms(roomsFilteredByTag)
})
tagSingle.addEventListener("click", () => {
    filterRoomsByTag("single")
    console.log(roomsFilteredByTag)
    displayFilteredRooms(roomsFilteredByTag)
})
tagSuite.addEventListener("click", () => {
    filterRoomsByTag("residential")
    displayFilteredRooms(roomsFilteredByTag)
})

// ------------------- main code -------------------//

let hotel;
let user;
let bookingsPast = [];
let bookingsFuture = [];
let roomsFilteredByDate;
let roomsFilteredByTag;

apiCalls.then(data => {
    let customerData = data[2].customers
    let roomData = data[3].rooms
    let bookingData = data[4].bookings
    hotel = new Hotel(roomData,bookingData,customerData)
}).then(() => console.log(hotel))

const logIn = () => {
    user = hotel.customers[0]
   // console.log(user)
    displayUserInfo()
} 

const displayUserInfo = () => {
    changeWelcome()
    checkUserBookings()
    displayCurrentBookingsFuture()
    displayCurrentBookingsPast()
    displayTotalSpent()
    filterRoomsByDate("2022/11/11")
    displayFilteredRooms(roomsFilteredByDate)
}

const changeWelcome = () => {
    welcomeMessage.innerText = `Welcome, ${user.name}!`
}

const checkUserBookings = () => {
    user.bookings.forEach((booking) => {
        checkDatePassed(booking)
    })
}

const checkDatePassed = (booking) => {
    let bookingDateSplit = booking.date.split("/")
    let currentDateSplit = hotel.date.split("/")
    if(bookingDateSplit[0] < currentDateSplit[0] 
        || bookingDateSplit[1] < currentDateSplit[1]
        || bookingDateSplit[2] < currentDateSplit[2]) {
        bookingsPast.push(booking)
    } else {
        bookingsFuture.push(booking)
    }
} 

const displayCurrentBookingsPast = () => {
    bookingsPastSelect.innerHTML = " "
    bookingsPast.forEach((booking) => {
        let bookingRoom = hotel.rooms.find((room) => {
           return room.roomNum === booking.room
        })
        bookingsPastSelect.innerHTML +=
        `
        <div class="booking-info">
        <p>room: ${booking.room} date: ${booking.date} cost: ${bookingRoom.cost}</p>
        </div>
        `
    })
}

const displayCurrentBookingsFuture = () => {
    bookingsFutureSelect.innerHTML = " "
    bookingsFuture.forEach((booking) => {
        let bookingRoom = hotel.rooms.find((room) => {
           return room.roomNum === booking.room
        })

        bookingsFutureSelect.innerHTML +=
        `
        <div class="booking-info">
        <p>room: ${booking.room} date: ${booking.date} cost: ${bookingRoom.cost}</p>
        </div>
        `
    })
}

const displayTotalSpent = () => {
    totalSpent.innerHTML = "$"+`${user.moneySpent}`
}

let filterRoomsByDate = (date) => {
    roomsFilteredByDate = hotel.rooms.reduce((acc, room) => {
        if(!room.datesBooked.includes(date)){
            acc.push(room)
        }
        return acc;
    }, [])
}
let displayFilteredRooms = (Arr) => {
    roomsSelect.innerHTML = "";
    Arr.forEach((room) => {
        roomsSelect.innerHTML +=
        `
        <div class="rooms-info">
        <p>Room: ${room.roomNum} Type: ${room.typeOfRoom} Beds: ${room.numBeds} ${room.bedSize} Cost: ${room.cost}</p>
        </div>
        `
    })
}

const filterRoomsByTag = (tag) => {
    roomsFilteredByTag = roomsFilteredByDate.reduce((acc, room) => {
        if(room.typeOfRoom === tag){
            acc.push(room)
        }
        return acc;
    }, [])
}