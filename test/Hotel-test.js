import chai from 'chai';
const expect = chai.expect;
import Hotel from "../src/classes/Hotel"
const {customersExample, bookingsExample, roomsExample} = require("../src/data/sampleDatasets")

describe.only('Hotel', function() {
    let hotel;
    beforeEach(() => {
        hotel = new Hotel( roomsExample, bookingsExample, customersExample)
      });

      it("should be a function", function() {
          expect(Hotel).to.be.a("function")
      })

      it("should be able to hold current date", function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '/' + mm + '/' + dd;
          expect(hotel.date).to.equal(today)
      })

      it("should be able to hold an array of all rooms", function () {
          expect(hotel.rooms).to.be.an("array")
          expect(hotel.rooms.length).to.equal(7)
      })

      it("should be able to hold a list of all customers", function () {
          expect(hotel.customers).to.be.an("array")
          expect(hotel.customers.length).to.equal(7)
      })
});