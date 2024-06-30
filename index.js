const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(200));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(100));

const selectDifferentDrivers = function(drivers, selectingFunction) {
  return selectingFunction(drivers);
};

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
