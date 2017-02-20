import 'whatwg-fetch';

const numbers = [
  1, 2, 4, 20,
  50, 75, 80,
];

let sum = 0;
//
// *** FOR LOOP ***

//  for (let i = 0) < number(var i = 0; i < numbers.length; i++) {
//   const current = numbers[i];
//   sum += current; // sum = sum + number
//   debugger;
// }

// NOTES on above
// run debugger and look at sources tab
// hover over sum
// hit play button a few times and look at console to see sum

// for each loop we can run a function
function runThisLotsOfTimes(current) {
  sum += current;
}

// runsThisLotsOfTimes is just a function
// runThisLotsOfTimes(2);
// for each keeps looping
numbers.forEach(runThisLotsOfTimes);

console.log(numbers, sum);

// *** NEW TOPIC ***

// function calling it wdtr and taking 1 argument
function whenDoesThisRun(str) {
  console.log('This was run ${str}');
}

console.log('This was run 1');

whenDoesThisRun(2);

//this is scheduled to happen after the call stack finishes everything else
// function to run and tells us how many milliseconds to wait
window.setTimeout(() => {
  whenDoesThisRun(3);
}, 0);

whenDoesThisRun(4);

// *** NEW TOPIC: Let's Talk about Events ***

// GENERAL NOTES
// creating a variable that we want to use
// let: what it points to can change, const cannot

const searchBtn = document.querySelector(.planet-submit);
const searchInput = documentQuerySelector('.planet-name')
// NOTES ON ABOVE ACTIONS
// 1- xxx
// 2- xxx
// single quotes means a string
// look up documentQuerySelector, returns the first item in the document that matches the specified group of selectors;
// try to find the tagname 'planet-name'
// use dot to find the class name '.planet-name'
// ids are class names that you can't reuse

// searchBtn.onclick = function() {
//   window.alert('You have type in ${searchInput.value}');
// };
// // NOTES ON ABOVE ACTIONS
// // searchBtn is an object
// // .onclick is a key within that object and we are setting the value for that key to anything
// // onclick is this function
// // parentheses = function
// // element on click is equal to function
// // This tells the browser that whenever the search button is clicked on, run this function
//
// searchBtn.onclick = function() {
//   window.alert('This will run instead');
// };
// // NOTES ON ABOVE ACTIONS
// // we have just overwritten what happens on click
// // line 71-73 is thrown out the window

searchBtn.addEventListener('click', function(){
  window.alert('You have type in {$searchInput.value}');
});

searchBtn.addEventListener('click', function(){
  window.alert('This can run too}');
});

// 'click' is a string (browser recognises this an event type)
// the rest is the function
// pass in a string of event you want to listen to, and the function you want to run when that event is fired
// can have multiples items respond to the click event
// none of this code runs automatically, we have to wait for it
