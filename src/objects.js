// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars */

// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys
const keys = obj => Object.keys(obj);

// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values
const values = obj => keys(obj).map(prop => obj[prop]);

// Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
const mapObject = (obj, cb) => keys(obj).reduce((newObj, prop) => {
  newObj[prop] = cb(obj[prop]);
  return newObj;
}, {});
// Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
const pairs = obj => keys(obj).map(prop => [prop, obj[prop]]);

// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert
const invert = obj => keys(obj).reduce((newObj, prop) => {
  const value = obj[prop];
  newObj[value] = prop;
  return newObj;
}, {});

// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults
const defaults = (obj, defaultProps) => keys(defaultProps).reduce((newObj, prop) => {
  if (obj[prop] === undefined) newObj[prop] = defaultProps[prop];
  else newObj[prop] = obj[prop];
  return newObj;
}, obj);
/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
