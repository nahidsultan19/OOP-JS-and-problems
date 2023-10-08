// Coding challenge #8: Create a function that receives an array of numbers and returns 
// an array containing only the positive numbers

function positiveNumber(nums) {
    let num = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element >= 0) {
            num.push(element)
        }
    }
    return num;
}

let nums = [-1, 2, 3, 4, 5, -6, 7, 8, -9, 10];
const result = positiveNumber(nums);
console.log(result);

