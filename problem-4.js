// Coding challenge #4: Calculate the sum of odd numbers greater than 10 and less than 30

let sumOdd = 0;
for (let i = 11; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(`Odd number is: ${i}`);
        sumOdd += i
    }
}
console.log(`Sum of odd number is: ${sumOdd}`);
