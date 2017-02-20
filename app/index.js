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

const searchBtn = document.querySelector('.planet-submit');
const searchInput = document.querySelector('.planet-name');
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
// pass in a string of event you want to listen to,
// and the function you want to run when that event is fired
// can have multiples items respond to the click event
// none of this code runs automatically, we have to wait for it

function fillResults(results){
  // Create a div:
  const planetEl = document.CreateElement('div');
  // Add the class "result-item" to that div:
  planetEl.classList.add('result-item');

  // Fill in the child elements for the "result-item":
  planetEl.innerHTML = `
    <h2 class="result-item__name"></h2>
    <p class="result-item__population"></p>
    <p class="result-item__gravity"></p>`;

  // Set the innerText of the child elements based on the "planet" data:
  planet.querySelector('.result-item__name').innerText = planet.name;
  planet.querySelector('.result-item__pupulation').innerText = '${planet.population} Lifeforms';
  planet.querySelector('.result-item__gravity').innerText = 'Gravity: ${planet.gravity}';

// up to this point we are getting undefined up to this point because we haven't returned anything
// Need to return something

  return planetEl;

 }

// what we did
// can't set the result of a function equal to something

function fillResults(result) {
  const resultList = document.querySelector('.results')
  resultListEl.innerHtml = '';

  results.forEach((planet) => {
    const planetEl = makePlanet(planet);

    resultListEl.appendChild(planetEl);
  }
)
}

// find result element
// loop over using for each
// for each call planet
// create new planet element using makeplanet
// append planet element to parent element

function searchForPlanet(name) {
  // Line above: Look up a list of planets that match the search name
  fetch(`http://swapi.co/api/planets?search=${name}`)
    .then((res) => {
      return res.json();

    }).then((data) => {

      fillResults(data.reults);
 // Lines 149-154: Fill in a list of search results and our results should be the JS object
    });
}
// NOTES ON ABOVE ITEMS
// i promise I will tell you when i succeed or when I fail
// * fetch takes a while and when I'm don I'm going to callback ((res) => {
// return res.json();
// }) *
// What we've done:
//  Hey fetch me SWAPI and give back to me the results
//  when you get back to me, parse it as resulting JSON
//  when you're odne with all that go to...
//  step 3: give me results from step 2 and let me do something with it
//  step 1: from fetch
//  step 2: from .then
//  step 3: from .then#2


searchForPlanet('Yavin');

// Listen for the searchBtn to be clicked:
searchBtn.addEventListener('click', () => {
  searchforPlanet(searchInput.value);
  // whatever the user puts into the search button
});

// NOTES ON ABOVE ITEMS


// use backticks because I'm about to ender the search term
