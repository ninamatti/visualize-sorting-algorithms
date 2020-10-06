const Sort = require("./Sort");
require("./index.css");

console.log("we made it into the app!!");

// get the display elements!!

// level 1
let levelOne = document.getElementById("level1");

let levelOneArrayOne = document.getElementById("level1array1");
let levelOneArrayTwo = document.getElementById("level1array2");

// level 2
let levelTwo = document.getElementById("level2");

let levelTwoArrayOne = document.getElementById("level2array1");
let levelTwoArrayTwo = document.getElementById("level2array2");
let levelTwoArrayThree = document.getElementById("level2array3");
let levelTwoArrayFour = document.getElementById("level2array4");

// level 3
let levelThree = document.getElementById("level3");

let levelThreeArrayOne = document.getElementById("level3array1");
let levelThreeArrayTwo = document.getElementById("level3array2");
let levelThreeArrayThree = document.getElementById("level3array3");
let levelThreeArrayFour = document.getElementById("level3array4");
let levelThreeArrayFive = document.getElementById("level3array5");
let levelThreeArraySix = document.getElementById("level3array6");
let levelThreeArraySeven = document.getElementById("level3array7");
let levelThreeArrayEight = document.getElementById("level3array8");

// level 4
let levelFour = document.getElementById("level4");

let levelFourArrayOne = document.getElementById("level4array1");
let levelFourArrayTwo = document.getElementById("level4array2");
let levelFourArrayThree = document.getElementById("level4array3");
let levelFourArrayFour = document.getElementById("level4array4");

// level 5
let levelFive = document.getElementById("level5");

let levelFiveArrayOne = document.getElementById("level5array1");
let levelFiveArrayTwo = document.getElementById("level5array2");

// level 6
let levelSix = document.getElementById("level6");

let levelSixArrayOne = document.getElementById("level6array1");

console.log(levelOneArrayOne);

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

  console.log("resultArray: ", resultArray);

  // fill in display elements

  // level 1
  levelOneArrayOne.innerText = inputArray.slice(0, 4);
  levelOneArrayTwo.innerText = inputArray.slice(4);

  // level 2
  levelTwoArrayOne.innerText = inputArray.slice(0, 2);
  levelTwoArrayTwo.innerText = inputArray.slice(2, 4);
  levelTwoArrayThree.innerText = inputArray.slice(4, 6);
  levelTwoArrayFour.innerText = inputArray.slice(6);

  // level 3
  levelThreeArrayOne.innerText = inputArray[0];
  levelThreeArrayTwo.innerText = inputArray[1];
  levelThreeArrayThree.innerText = inputArray[2];
  levelThreeArrayFour.innerText = inputArray[3];
  levelThreeArrayFive.innerText = inputArray[4];
  levelThreeArraySix.innerText = inputArray[5];
  levelThreeArraySeven.innerText = inputArray[6];
  levelThreeArrayEight.innerText = inputArray[7];

  // level 4
  levelFourArrayOne.innerText = resultArray.slice(0, 2);
  levelFourArrayTwo.innerText = resultArray.slice(2, 4);
  levelFourArrayThree.innerText = resultArray.slice(4, 6);
  levelFourArrayFour.innerText = resultArray.slice(6);

  // level 5
  levelFiveArrayOne.innerText = resultArray.slice(0, 4);
  levelFiveArrayTwo.innerText = resultArray.slice(4);

  // level 6
  levelSixArrayOne.innerText = resultArray;

  console.log("output: ", resultArray);
  console.log("children of level one: ", levelOne.children);

  // make level 1 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelOne.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 2000);

  // make level 2 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelTwo.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 4000);

  // make level 3 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelThree.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 6000);

  // make level 4 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelFour.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 8000);

  // make level 5 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelFive.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 10000);

  // make level 6 appear by removing hidden and adding fade-in class
  setTimeout(() => {
    for (let child of levelSix.children) {
      child.classList.remove("hidden");
      child.classList.add("fade-in");
    }
  }, 12000);
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
