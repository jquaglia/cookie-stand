'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var storeTable = document.getElementById('table');
var tableHeader = document.getElementById('tHeader');
var tableFooter = document.getElementById('tFooter');
var stores = [];
var myForm = document.getElementById('form');

// constructor
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
  renderElement('th', this.name, trElement);
  // iteratively creates, give content, and append
  for (var i = 0; i < this.hourlySales.length; i++) {
    renderElement('td', this.hourlySales[i], trElement);
  }
  // render the daily total
  renderElement('td', this.dailyTotal, trElement);
};

// functions v

// render element
function renderElement(elementCreated, content, parentElement){
  var childElement = document.createElement(elementCreated);
  childElement.textContent = content;
  parentElement.appendChild(childElement);
}

// render header of table
function renderHeader() {
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  renderElement('th', '', trElement);
  // Render Header iteratively through the hours
  for (var i = 0; i < hours.length; i++) {
    renderElement('th', hours[i], trElement);
  }
  // render the total
  renderElement('th', 'Daily Total', trElement);
}

// render footer of table
function renderFooter() {
  var trElement = document.createElement('tr');
  tableFooter.appendChild(trElement);
  renderElement('th', 'Total Sales:', trElement);
  var globalDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var globalHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      globalHourlyTotal += stores[j].hourlySales[i];
    }
    globalDailyTotal += globalHourlyTotal;
    renderElement('td', globalHourlyTotal, trElement);
  }
  renderElement('td', globalDailyTotal, trElement);
}

//event Handler
function handleSubmit(event){
  event.preventDefault();
  var name = event.target.nameOfStore.value;
  var min = parseInt(event.target.minCustomers.value);
  var max = parseInt(event.target.maxCustomers.value);
  var avg = parseInt(event.target.avgSales.value);
  var newStore = new Store(name, min, max, avg);
  newStore.render();
  tableFooter.innerHTML = '';
  renderFooter();
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

// event listener
myForm.addEventListener('submit', handleSubmit);
