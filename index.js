// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


// 1. Fetch the users from the API
async function main() {

    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
    usersData.map(() =>
    `<div class="user-card">
        <div class="user-card__container">
            <h3>User's Name</h4>
            <p><b>Email:</b> email@email.com</p>
            <p><b>Phone:</b> 0000000000</p>
            <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
        </div>
        </div>`)
        .join("")
        ;
}

main();


/*

Here's how async/await works:

The async keyword is used to define a function as asynchronous. 
This means that the function will always return a Promise. 
You can use the await keyword inside an async function to wait 
for a Promise to resolve before continuing execution.

When you call an async function, it returns a Promise. 
You can then use the await keyword to wait for the Promise 
to resolve before continuing execution.

Here's an example of an async function:
*/

async function myAsyncFunction() {
  const result = await myPromiseFunction();
  console.log(result);
}

function myPromiseFunction() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 2000);
  });
}

myAsyncFunction();


/*
In this example, myAsyncFunction is defined as an async function, 
and it calls myPromiseFunction using the await keyword. 
myPromiseFunction returns a Promise that resolves after 2 seconds, 
and when it resolves, the result is logged to the console.

The advantage of using async/await is that it makes asynchronous code 
easier to read and write. Instead of chaining multiple .then() calls, 
you can write code that looks like synchronous code, but still 
performs asynchronous operations.
*/