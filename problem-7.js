// Coding challenge #7: Calculate the average of the numbers in an array of numbers

function average(num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        console.log(i);
        sum += i;
    }
    console.log(sum / num.length);
}
let num = [1, 3, 5, 8, 10, 6];
average(num);

