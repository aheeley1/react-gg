function double(arr) {
    const results = [];

    for (let i = 0; i < arr.length;i++) {
        results.push(nums[i] * 2);
    }

    return results;
}

function add(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

const nums = [1,2,3,4,5];

const doubles = double(nums);
console.log(doubles);

const sum = add(nums);
console.log(sum);