const Sort = require("./Sort");
require("./index.css");

console.log("we made it into the app!!");

let inputArray = [];

let button = document.getElementById("submitButton");
button.addEventListener("click", () => {
  inputArray = [
    Number(document.getElementById("no1").value),
    Number(document.getElementById("no2").value),
    Number(document.getElementById("no3").value),
    Number(document.getElementById("no4").value),
    Number(document.getElementById("no5").value),
    Number(document.getElementById("no6").value),
    Number(document.getElementById("no7").value),
    Number(document.getElementById("no8").value),
  ];
  console.log(inputArray);

  let mergeFunction = new Sort(inputArray);
  let resultArray = mergeFunction.divideAndConquer(inputArray);

  console.log("output: ", resultArray);
});

/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.

      EDIT: THANK YOU! I feel less lonely already :)
*/

// // How can we use require here if it's frontend? We can thank webpack.
// const Sort = require("./Sort");

// // A link to our styles!
// require("./index.css");

// const sort = new Sort();
// //sort.divideAndConquer();

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle(sort.returnValue("Enter an array with 8 numbers and watch it get mergeSorted!"));
// document.getElementById("title").appendChild(title);

// /*
//     An simple example of how you can make your project a bit more
//     interactive, if you would like.

//     In our `index.html` page, we have a short form.
//     Here is the code that talks to it.
//   */
// function changeTitle(event) {
//   event.preventDefault();
//   // console.log('What is an event?', event);
// }

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });
