// Coding challenge #5: Create a function that will convert from Fahrenheit to Celsius

function toCelsius(num) {
    let result = (num - 32) * 5 / 9;
    return result;
}
console.log(toCelsius(86));;