//relies on state external to the function
//also creates an observable change to the program (side effect)
function addTodo(todo) {
    todos.push(todo);
  }

  // does not create a side effect, but relies on external state from an api
function getGithubProfile(username) {
    return fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());
}

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