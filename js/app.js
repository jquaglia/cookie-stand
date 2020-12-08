'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


// 1st object
var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  // populate hourlySales array
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // var calcSales = this.getRandomCustomers() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomCustomers() * this.avg);
      // this.hourlySales[i] = calcSalesRound;
      this.hourlySales.push(calcSalesRound)[i];
      this.dailyTotal += calcSalesRound;
    }
  },
  // render my list with total at the end
  render: function () {
    this.calculateHourlySales();
    //do the thing
    // proof i can get here
    console.log('inside render method');
  }
};

seattleStore.render();
// console.log(seattleStore.hourlySales);
