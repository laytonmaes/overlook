// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Hotel from './classes/Hotel';

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

const inputDate = document.querySelector("#userDate")
const buttonDate = document.querySelector("#submitDate")
const inputUsername = document.querySelector("#username")
const inputPassword = document.querySelector("#password")

const buttonLogin = document.querySelector("#loginButton")
const errorUsername = document.getElementById("usernameError")
const errorPassword = document.getElementById("passwordError")
const pageUserDashboard = document.querySelector(".user-dashboard")
const pageLogin = document.querySelector(".login-page")

//------------------- event listeners -------------------//
window.onload = () => {
    apiCalls.then(data => {
        getData = data[0]
        postData = data[1]
       let customerData = data[2].customers
       let roomData = data[3].rooms
       let bookingData = data[4].bookings
       hotel = new Hotel(roomData,bookingData,customerData)
       }).then(() => {
           updateDate()
       })
}

buttonLogin.addEventListener("click", (event) => {
    event.preventDefault()
    logIn()
})

buttonDate.addEventListener("click", () => {
    let userInputDate = convertDateForData(inputDate.value)
    filterRoomsByDate(userInputDate)
    displayFilteredRooms(roomsFilteredByDate)
})
tagJunior.addEventListener("click", () => {
    filterRoomsByTag("junior")
    displayFilteredRooms(roomsFilteredByTag)
})
tagSingle.addEventListener("click", () => {
    filterRoomsByTag("single")
    displayFilteredRooms(roomsFilteredByTag)
})
tagSuite.addEventListener("click", () => {
    filterRoomsByTag("residential")
    displayFilteredRooms(roomsFilteredByTag)
})

roomsSelect.addEventListener("click", (event) => {
    createBooking(event)
})

// ------------------- main code -------------------//

let hotel;
let userIndex;
let user;
let bookingsPast = [];
let bookingsFuture = [];
let roomsFilteredByDate;
let roomsFilteredByTag;
let postData;
let getData;

const logIn = () => {
    let username = inputUsername.value
    let password = inputPassword.value

    let newUserNum = username.replace("customer", " ")
        newUserNum = parseInt(newUserNum)

    if(username.includes("customer") && password === "overlook2021" && newUserNum && 1 < newUserNum < 50) {
        userIndex = newUserNum
        user = hotel.customers[userIndex]
        displayUserInfo()
        pageLogin.classList.add("hidden")
        pageUserDashboard.classList.remove("hidden")
    } else {
        if(!username.includes("customer") || 1 > newUserNum > 50) {
            errorUsername.classList.remove("hidden")
        }
        if (password !== "overlook2021") {
            errorPassword.classList.remove("hidden")
        }
    }
} 

const displayUserInfo = () => {
    changeWelcome()
    checkUserBookings()
    displayCurrentBookingsFuture()
    displayCurrentBookingsPast()
    displayTotalSpent()
    let userInputDate = convertDateForData(inputDate.value)
    filterRoomsByDate(userInputDate)
    displayFilteredRooms(roomsFilteredByDate)
}

const changeWelcome = () => {
    welcomeMessage.innerText = `Welcome, ${user.name}!`
}

const checkUserBookings = () => {
    bookingsPast = []
    bookingsFuture = []
    user.bookings.forEach((booking) => {
        checkDatePassed(booking)
    })
}

const updateDate = () => {
    inputDate.value =  convertDateForDom(hotel.date)
}

const convertDateForDom = (date) => {
    let splitDate =date.split("/");
    return splitDate[0]+ "-" + splitDate[1] + "-" + splitDate[2]
}

const convertDateForData = (date) => {
    let splitDate =date.split("-");
    return splitDate[0]+ "/" + splitDate[1] + "/" + splitDate[2]
}

const checkDatePassed = (booking) => {
    if(booking.date < hotel.date) {
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
    totalSpent.innerHTML = "Total booking cost: $"+`${user.moneySpent}`
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
    if(Arr.length === 0){
        roomsSelect.innerHTML = 
        `<p>We are so sorry to report no rooms with those conditions are available. </p>
        <p>Please try another date or tag, and forgive us for this oversight!</p>`;
        return
    }
    Arr.forEach((room) => {
        roomsSelect.innerHTML +=
        `
        <div class="rooms-info">
        <p>Room: ${room.roomNum} Type: ${room.typeOfRoom} Beds: ${room.numBeds} ${room.bedSize} Cost: ${room.cost}</p>
        <button id="room${room.roomNum}">
        Book Room
        <span class="visually-hidden">${room.roomNum}, Type: ${room.typeOfRoom} Beds: ${room.numBeds} ${room.bedSize} for ${inputDate.value}</span>
        </button>
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

const createBooking = (event) => {
    if(event.target.id) {
        let newRoomNum = event.target.id
        newRoomNum = newRoomNum.replace("room", " ")
        newRoomNum = parseInt(newRoomNum)

        let newId = Date.now()
        let newDate = convertDateForData(inputDate.value)
        const newBooking = {"id":newId,"userID":user.id,"date":newDate,"roomNumber":newRoomNum}
        postBooking(newBooking)
    }
}

const postBooking = (newBooking) => {
    postData(newBooking, "bookings")
    .then(() => {
        const customerData = getData("customers")
        const roomData = getData("rooms")
        const bookingData = getData("bookings")
        Promise.all([customerData, roomData, bookingData])
        .then(data => {
            let customerData = data[0].customers
            let roomData = data[1].rooms
            let bookingData = data[2].bookings
            hotel = new Hotel(roomData,bookingData,customerData)
        })
        .then(() => {
            logIn()
        })
    })
}


