'use strict';


function randomNumber(min, max) {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// 1st object - get it to work

var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
  },
  calculateHourlySales() {
    console.log(this.getRandomNumber());
  },
  render: function () {
    this.calculateHourlySales();
    //do the thing
    // proof i can get here
    console.log('inside render method');
  }
};
