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

//function later_imp(arr) {
    //const btn = document.getElementById("btn");
    //btn.addEventListener('click', () => {
        //btn.classList.toggle('highlight');
        //btn.innerText === 'Add Highlight'
        //? btn.innerText = "Remove Highlight"
       // : btn.innerText = "Add Highlight"; )
//}

//.container {
   // background: tomato;
    //height: 100%;
    //width: 100%;
//} 
//css class selector

// declarative, can encapsulate inside a <Btn /> component
// the library used contains the implementation detail
// writing reliable software is about properly managing complexity
// abstraction behind a declarative api, which had the imperative implementation
// declarative code conforms to the mental model of the developer
// imperative programming conforms to the operational model of the machine
// aim to abstrtact as much imperative code behind a decalartive API as possible
// describe what you want without specifying how to get it
// "table for two" is universal
// "I'm going to that table by the window over the harbor" is context specific
// imperative code relies on context making it hard to reuse
// Reacft is declarative as it describes the UI based on state 
// and is an abstraction over imperative code
//imperative gives an explicit procedural instructions for how to accomplish something

//imperative
const container = document.getElementById("container")
const btn = document.createElement("button")

btn.className = "btn active"
btn.onclick = () => {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
    this.classList.add("inactive")
  } else {
    this.classList.remove("inactive")
    this.classList.add("active")
  }
}

container.appendChild(btn)