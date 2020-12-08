'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var storeTable = document.getElementById('table');
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

// function renderHeader() {
//   // Render Header iteratively through the hours
//   for(var i = 0; i < hours.length; i++){
//     var 
//   }
// }


// instantiations
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  for (var i = 0; i < stores.length; i++){
    stores[i].render();
  }
}

// executable code
renderAll();
