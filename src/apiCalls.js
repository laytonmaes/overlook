const getData = (fetchApi) => {
    return fetch(`http://localhost:3001/api/v1/${fetchApi}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}

const postData = (formData, fetchApi) => {
    return fetch(`http://localhost:3001/api/v1/${fetchApi}`,
    {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to Post Information")
        } else {
            return response.json()
        }
    })
    .catch(error => console.log(error))
}

const customerData = getData("customers")
const roomData = getData("rooms")
const bookingData = getData("bookings")

let apiCalls = Promise.all([getData, postData, customerData, roomData, bookingData])

export default apiCalls;