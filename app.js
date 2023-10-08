// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { alert(i); }, 1000 + i)
// }

// (function () {
//     var a = b = 5;
// })();
// console.log(b);

// function sumNumber(nums) {
//     let sum = 0;
//     for (let i = 0; i <= nums.length; i++) {
//         sum += i
//     }
//     return sum
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = sumNumber(nums);
// console.log(result);

// let num = 1;
// for (let i = 1; i <= 10; i++) {
//     num *= i
// }
// console.log(num);

// let sum = 0;
// for (i = 11; i <= 30; i++) {
//     if (i % 2 != 0) {
//         sum += i;
//     }
// }
// console.log(sum)

const positiveNumber = (nums) => {
    return nums.filter(num => num > 0)
}
const nums = [1, 3, -3, 6, -8, 9, -10]
const result = positiveNumber(nums)
console.log(result);