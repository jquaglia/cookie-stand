'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var storeTable = document.getElementById('table');
var tableHeader = document.getElementById('tHeader');
var tableFooter = document.getElementById('tFooter');
var stores = [];



function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  stores.push(this);
}

Store.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    // var calcSales = this.getRandomCustomers() * this.avg;
    var hourlyTotal = Math.ceil(this.getRandomCustomers() * this.avg);
    // this.hourlySales[i] = hourlyTotal;
    this.hourlySales.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  storeTable.appendChild(trElement);
  // create the first cell in row, give it the name content
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  // iteratively creates, give content, and append
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  // render the daily total
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

// render header of table
function renderHeader() {
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);
  // Render Header iteratively through the hours
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  // render the total
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Total';
  trElement.appendChild(thElement);
}

// render footer of table
function renderFooter() {
  var trElement = document.createElement('tr');
  tableFooter.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = 'Total Sales:';
  trElement.appendChild(thElement);
  var globalDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var globalHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      globalHourlyTotal += stores[j].hourlySales[i];
    }
    globalDailyTotal += globalHourlyTotal;
    var tdElement = document.createElement('td');
    tdElement.textContent = globalHourlyTotal;
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = globalDailyTotal;
  trElement.appendChild(tdElement);
}

// instantiations
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
  renderHeader();
  renderFooter();
}

// executable code
renderAll();
