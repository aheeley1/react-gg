//relies on state external to the function
//also creates an observable change to the program (side effect)
function addTodo(todo) {
    todos.push(todo);
  }

//   // does not create a side effect, but relies on external state from an api
//   //unpredictable, promise will not be the same with each invocation
// function getGithubProfile(username) {
//     return fetch(
//       `https://api.github.com/users/${username}`
//     ).then((res) => res.json());
// }
// const p1 = getGithubProfile("tylermcginnis")
// const p2 = getGithubProfile("tylermcginnis")
// p1 === p2 // false


//does not rely on state outside the fuction but creates a side effect
function updateDocumentTitle(title) {
    document.title = title;
  }

    //unpredictable-depends on TAX_RATE existing and being a decimal
function calculateFinalPrice(price, quantity) {
    const total = price * quantity;
    return total * (1 + TAX_RATE);
 }

// unpredictable function calls
Math.random() // 0.9511513628376609
Math.random() // 0.6547771399705873

Date.now() // 1665072516384
Date.now() // 1665072525093

const friends = ["Ben", "Lynn", "Alex"]
friends.push("Jeff") // 4
friends.push("Jeff") // 5

//expensive function, but predictable
//no side effects and always returns the same out for a given input
const isPrime = (n) => {
  if(n === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++)
  {
    if (n%i === 0){
      return false;
    }
  }
  return true;
}
//Because isPrime is predictable, we can cache and reuse the result
//it doesn't make sense to invoke isPrime more than once for a given number
//isPrime(997) is always going to return true no matter how many times we run it

let primeCache = {
  1: false
}

const isPrimeCached = (n) => {
    if(typeof primeCache[n] === 'boolean'){
      return primeCache[n];
    }

    for (let i = 2; i <= Math.sqrt(n), i++;) {
       if (i % n === 0) {
            primeCache[n] = false;
            return false;
       }
    }
    primeCache[n] = true;
    return true;
}

//export default isPrimeCached;