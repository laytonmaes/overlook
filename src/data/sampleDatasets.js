

const bookingsExample = [
    {"id":"5fwrgu4i7k55hl6sz","userID":6,"date":"2022/04/22","roomNumber":1},
    {"id":"5fwrgu4i7k55hl6t5","userID":4,"date":"2022/01/24","roomNumber":2},
    {"id":"5fwrgu4i7k55hl6t6","userID":5,"date":"2022/01/10","roomNumber":3},
    {"id":"5fwrgu4i7k55hl6t7","userID":2,"date":"2022/02/16","roomNumber":2},
    {"id":"5fwrgu4i7k55hl6t8","userID":1,"date":"2022/02/05","roomNumber":5},
    {"id":"5fwrgu4i7k55hl6t9","userID":3,"date":"2022/02/14","roomNumber":1},
    {"id":"5fwrgu4i7k55hl6t7","userID":4,"date":"2022/02/16","roomNumber":2}
]

const customersExample = [
    {"id":1,"name":"Leatha Ullrich"},
    {"id":2,"name":"Rocio Schuster"},
    {"id":3,"name":"Kelvin Schiller"},
    {"id":4,"name":"Kennedi Emard"},
    {"id":5,"name":"Rhiannon Little"},
    {"id":6,"name":"Fleta Schuppe"},
    {"id":7,"name":"Dell Rath"},
]

const roomsExample = [
    {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
    {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
    {"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
    {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},
    {"number":5,"roomType":"single","bidet":true,"bedSize":"queen","numBeds":2,"costPerNight":340.17},
    {"number":6,"roomType":"junior suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":397.02},
    {"number":7,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":2,"costPerNight":231.46}]

    module.exports = {
        roomsExample,
        customersExample,
        bookingsExample
    }