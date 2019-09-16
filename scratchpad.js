function multiplyBy10(num){//named functions are hoisted in their entirety
  return num * 10;
}

var multiplyBy10Anonymous = function(num){//undefined when called above it to be hoisted. Only the variable and not the value is hoisted.
  //anonymous functions only works on line #5
  return num * 10;
}

var multiplyBy10Arrow = (num) => {
  return num * 10
}

var multiplyBy10ArrowStep2 = num => {
  return num * 10
}
//subRULE for Arrow function
//1. if you have ONE and only ONE parameter, you can get rid of the paranthesis

var multiplyBy10ArrowStep3 = num => num * 10
//2. if the only thing you do inside the code is a return, I can get rid of the curly braces AND the return

//Advanced Code
var result = array
              .filter(num => num%2)//passing in a parameter called num and checking if it is odd or even with the mod:
              //filter function takes in an argument and filters it if it is truthy, then it returns it into the new array
              .map(num => num * 10)//
              //map function is like a for loop, returns the value in a new array
              .reduce((accumulator, num) => num+accumulator,0)//acc is accumlated values so far, individual num(value) at that point
              //reduce is a function used to add values together, then returns it as the new accumulator
  console.log(result);

var array = [1,2,3,4,5,6];
var newArray = [];

for( var i = 0; i < array.length; i++){
  newArray[i] = multiplyBy10(array[i]);
}

var mapArray = array.map(multiplyBy10);//map wants an argument that is a function
//does a loop through the array and does a callback for each of the item in the array
//map is like a for loop that is a callback
//callback function is defined by is not executed by us but someone else is ie. the map method
//binding something is when you're not calling it
//you can pass in an arrow anonymous function as well instead of multiplyBy10
//


//RULES:
//for making something into an arrow (fat) function:
// 1. Remove 'function' keyword
// 2. Insert an arrow between the close paranthesis and curly brace
// it is an anononymouse function with 2 main differences:
// - does not have the aruguments variable
// - is automatically bound to the scope in which it is defined
// Higher order functions:
