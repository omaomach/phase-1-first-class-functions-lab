const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        let multiplier = fare * integer;
        return multiplier;
    }

}

const quadruple = createFareMultiplier(3)(4);
console.log(quadruple);

const fareDoubler = function(createFareMultiplier) {

    let doubler = createFareMultiplier * 2;
    return doubler;

}

console.log(fareDoubler(4));

const fareTripler = function(createFareMultiplier) {
    let tripler = createFareMultiplier * 3;
    return tripler;
}

console.log(fareTripler(4))

const selectDifferentDrivers = function(drivers, selectDriver) {
    return selectDriver(drivers);
}
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))




