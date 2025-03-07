function double(arr) {
    const results = [];

    for (let i = 0; i < arr.length;i++) {
        arr.push(nums[i] * 2);
    }

    return results;
}

const nums = [1,2,3,4,5];
const doubles = double(nums);
console.log(doubles);