/* eslint-disable */

// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

/* ES5
var food = 'pineapple';
var isMyFavoriteFood = function(food) {
  food = food || 'thousand-year-old egg'; //This sets a default value if `food` is falsey
  return food === 'thousand-year-old egg';
};
var isThisMyFavorite = isMyFavoriteFood(food); */

const food = 'pineapple';

const isMyFavoriteFood = (food = 'thousand-year-old egg') => {
  return food === 'thousand-year-old egg';
};

const isThisMyFavorite = isMyFavoriteFood(food);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)
/* ES5:
var User = function(options) {
  this.username = options.username;
  this.password = options.password;
  this.sayHi = function() {
    return this.username + ' says hello!';
  };
}
var username = 'JavaScriptForever';
var password = 'password';
var me = new User({
  username: username,
  password: password,
});
*/
class User {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }
  sayHi() {
    return `${this.username} says hello!`;
  }
}

const username = 'JavaScriptForever';
const password = 'password';

const me = new User({ username, password });

// ----------------
// let, const, =>, ... (spread operator)
/* ES5
var addArgs = function () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

var argsToCb = function (cb) {
  var args = Array.prototype.slice.call(arguments);
  return cb.apply(null, args.splice(1));
};

var result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15
*/
const addArgs = (...args) => args.reduce((sum, n) => sum + n, 0);
const argsToCb = (cb, ...args) => cb(...args);
const result = argsToCb(addArgs, 1, 2, 3, 4, 5);

/* eslint-enable */
