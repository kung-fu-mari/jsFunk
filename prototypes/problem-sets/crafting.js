const { craftSupplies } = require('../datasets/crafting');

// To run the code you've written in this file, use node prototypes/problem-sets/crafting.js

console.log('Running crafting.js')

/* Crafting Prompts*/

/*
Level 1

Code: 
  Write a function called "getSupplyList" that takes in a craft as an argument and returns a list of supplies needed.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getSupplyList("crossStitching"))
    should print -->      
      ['fabric', 'needle', 'thread', 'scissors', hoop]

e.g.
  console.log(getSupplyList("crocheting"))
    should print -->      
      ['hook', 'yarn', 'scissors']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function getSupplyList(craftString) {
  return craftSupplies[craftString].reduce((suppliesList, supply) => {
    suppliesList.push(supply.name)
    return suppliesList
  }, [])
}

// console.log(getSupplyList("crossStitching"))
/*
Level 2

Code: 
  Write a function called "getDetailedList" that takes in a craft as an argument and returns a more detailed list of the supplies needed.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getDetailedList("weaving"))
    should print -->   
    [
      'I need 1 loom.',
      'I need 1 needle.',
      'I need 6 yarns.',
      'I need 1 scissor.'
    ]

e.g.
  console.log(getDetailedList("crocheting"))
    should print -->      
      [ 'I need 1 hook.', 'I need 3 yarns.', 'I need 1 scissor.' ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  
  get a craft name passed into function as string: craftString
  reduce appropriate craftsupplies craft using craftString
  create blank variable plural if strings need an s at the end
  check if supply.amountNeeded > 1, set plural to 's'
  assemble the requirement string and push it into the suppliesList

  */

function getDetailedList(craftString) {
  return craftSupplies[craftString].reduce((suppliesList, supply) => {
    var plural = ''
    if (supply.amountNeeded > 1) {
      plural = 's'
    }
    suppliesList.push(`I need ${supply.amountNeeded} ${supply.name}${plural}.`)

    return suppliesList
  }, [])
}

// console.log(getDetailedList("weaving"))
/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the crafting prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all crafting tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getSupplyList,
  getDetailedList
};
