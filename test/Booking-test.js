import chai from 'chai';
const expect = chai.expect;
import Booking from "../src/classes/Booking"
const {bookingsExample} = require("../src/data/sampleDatasets")

describe('Booking', function() {
  let bookingOne;
  beforeEach(() => {
    bookingOne = new Booking(bookingsExample[0])
  });

  it('should be a function', function() {
    expect(Booking).to.be.a("function");
  });

  it('should have a user id', function() {
    expect(bookingOne.userId).to.equal(6);
  });

  it('should have a date', function() {
    expect(bookingOne.date).to.equal("2022/04/22");
  });

  it('should have a room being booked', function() {
    expect(bookingOne.room).to.equal(1);
  });

  it('should have an id', function() {
    expect(bookingOne.id).to.equal("5fwrgu4i7k55hl6sz");
  });
});
