'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');


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
    // console.log(seattleStore.hourlySales);
    for (var i = 0; i < this.hourlySales.length; i++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append it to the DOM
      seattleList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
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
    // console.log(seattleStore.hourlySales);
    for (var i = 0; i < this.hourlySales.length; i++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append it to the DOM
      tokyoList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

var dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
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
    // console.log(seattleStore.hourlySales);
    for (var i = 0; i < this.hourlySales.length; i++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append it to the DOM
      dubaiList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

var parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
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
    // console.log(seattleStore.hourlySales);
    for (var i = 0; i < this.hourlySales.length; i++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append it to the DOM
      parisList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

var limaStore = {
  name: 'Paris',
  min: 2,
  max: 16,
  avg: 4.6,
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
    // console.log(seattleStore.hourlySales);
    for (var i = 0; i < this.hourlySales.length; i++){
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      // append it to the DOM
      limaList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
// console.log(seattleStore.hourlySales);
