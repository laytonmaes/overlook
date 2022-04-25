import chai from 'chai';
const expect = chai.expect;
import Customer from "../src/classes/Customer"
const {customersExample, bookingsExample, roomsExample} = require("../src/data/sampleDatasets")

describe('Customer', function() {
  let customerOne;
  beforeEach(() => {
    customerOne = new Customer(customersExample[0],bookingsExample, roomsExample)
  });

  it('should be a function', function() {
    expect(Customer).to.be.a("function");
  });

  it('should have a name', function() {
    expect(customerOne.name).to.equal("Leatha Ullrich");
  });

  it('should have an id', function() {
    expect(customerOne.id).to.equal(1);
  });

  it('should be able to store all bookings under users id', function() {
    const customerFour = new Customer(customersExample[3], bookingsExample, roomsExample)

    const customerFourBookings = [
      {"id":"5fwrgu4i7k55hl6t5","userId":4,"date":"2022/01/24","room":2},
      {"id":"5fwrgu4i7k55hl6t7","userId":4,"date":"2022/02/16","room":2}
    ]

    expect(customerFour.bookings).to.deep.equal(customerFourBookings);
  });

  it("should store how much a customer has spent", function () {
    expect(customerOne.moneySpent).to.equal(340.17)
  })
});
