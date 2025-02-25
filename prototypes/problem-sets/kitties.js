const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

// To run the code you've written in this file, use node prototypes/problem-sets/kitties.js

console.log('Running kitties.js')

/* Kitty Prompts*/

/*
Level 1

Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function findOrangeNames() {
  const orangeKitties = kitties.filter(kitty => kitty.color == 'orange');
  const orangeNames = orangeKitties.map(kitty => kitty = kitty.name);
  return orangeNames
}

console.log(findOrangeNames());

/*
Level 2

Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

  for each kitty in kitties
  if kitty's age is less than the next item, increase toShift var += 1
  loop until next kitty's age is greater
  splice item by toShift

  when done reverse
*/
// arraymove() CREDIT: https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another by Steak Overflow
function arrayMove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

// function sortByAge() {
//   kitties.forEach(function(kitty) {
//     var toShift = 0
//     var index = kitties.indexOf(kitty)
//     if (index == kitties.length - 1) {
//       return
//     }
//     while (kitty.age < kitties[index + toShift + 1].age) {
//       toShift += 1
//       if (kitties[index + toShift + 1] == kitties.length) {
//         break
//       }
//     }
//     arrayMove(kitties, index, index + toShift)
//   });
//   return kitties.reverse()
  
// };

// console.log(sortByAge())

/*
Level 3

Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
  
function growUp() {
  return kitties.map(function(kitty) { 
    kitty.age += 2 
    return kitty
  })
}

console.log(growUp())
/*
Level 4

Currently, your functions are probably using the imported `kitties` global  variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.

Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]

Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
*/


/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/





// module.exports = {
//   findOrangeNames,
//   sortByAge,
//   growUp
// };
