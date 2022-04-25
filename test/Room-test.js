import chai from "chai";
const expect = chai.expect;
import Room from "../src/classes/Room"
const {roomsExample} = require("../src/data/sampleDatasets")
const {bookingsExample} = require("../src/data/sampleDatasets")

describe("Room", function() {
  let roomOne, roomTwo;
  beforeEach(() => {
    roomOne = new Room(roomsExample[0], bookingsExample);
  });

  it('should be a function', function() {
    expect(Room).to.be.a("function");
  });

  it("should have a cost", function() {
    expect(roomOne.cost).to.equal(358.4);
  })

  it("should have a bed Size", function() {
    expect(roomOne.bedSize).to.equal("queen");
  })

  it("should be able to store how many beds are in the room", function() {
    expect(roomOne.numBeds).to.equal(1);
  })

  it("should be able to have bookings", function() {
    expect(roomOne.bookings).to.be.a("array");
    console.log(roomOne.bookings)
    expect(roomOne.bookings.length).to.equal(2)
  });

  it("should be able to tell all dates booked", function () {
    let roomOneDates = ["2022/04/22","2022/02/14"]
    expect(roomOne.datesBooked).to.deep.equal(roomOneDates)
  })

  it("should be able to tell the room type", function() {
     roomTwo = new Room(roomsExample[1], bookingsExample)

    expect(roomOne.typeOfRoom).to.equal("residential")
    expect(roomTwo.typeOfRoom).to.equal("residential")
  })

  it("should be able to differentiate between types of rooms", function () {
    let roomThree = new Room(roomsExample[2], bookingsExample)
    let roomFive = new Room(roomsExample[4], bookingsExample)
    let roomSix = new Room(roomsExample[5], bookingsExample)

    expect(roomThree.typeOfRoom).to.equal("single")
    expect(roomFive.typeOfRoom).to.equal("single")

    expect(roomOne.typeOfRoom).to.equal("residential")
    expect(roomSix.typeOfRoom).to.equal("junior")
  })
});
