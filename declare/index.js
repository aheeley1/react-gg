function double_imp(arr) {
    const results = [];

    for (let i = 0; i < arr.length;i++) {
        results.push(nums[i] * 2);
    }

    return results;
}

//declarative implementation
function double_dec(arr) {
    return arr.map(item => item * 2);
}

function add_imp(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function add_dec(arr) {
    return arr.reduce((prev,current) => prev + current, 0);
}

const nums = [1,2,3,4,5];

const doubles = double_imp(nums);
console.log(doubles);

const decDoubles = double_dec(nums);
console.log(decDoubles);

const sum = add_imp(nums);
console.log(sum);