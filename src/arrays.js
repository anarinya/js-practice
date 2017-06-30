// Complete the following functions.
// These functions only need to work with arrays.

/* eslint-disable no-unused-vars, max-len */

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
  for (let i = 0, len = elements.length; i < len; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arr = [];
  for (let i = 0, len = elements.length; i < len; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  let sum = memo ? memo + elements[0] : elements[0];
  for (let i = 1, len = elements.length; i < len; i++) {
    sum = cb(sum, elements[i]);
  }
  return sum;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0, len = elements.length; i < len; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const passed = [];
  for (let i = 0, len = elements.length; i < len; i++) {
    if (cb(elements[i])) passed.push(elements[i]);
  }
  return passed;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const copy = [].concat(elements);
  const flattened = [];

  const flat = (arr) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] instanceof Array) flat(arr[i]);
      else flattened.push(arr[i]);
    }
  };
  flat(copy);
  return flattened;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
