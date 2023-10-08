// Coding challenge #9: Find the maximum number in an array of numbers

function maxNumber(nums) {
    let maximum = [];
    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i];
    //     if (maximum < element) {
    //         maximum = element;
    //     }
    // }
    for (i in nums) {
        const ele = nums[i];
        if (maximum < ele) {
            maximum = ele;
        }
    }
    return maximum;
}
const nums = [1, 4, 9, 10, 22, 56, 30];
const result = maxNumber(nums);
console.log(result);