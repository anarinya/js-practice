// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let grabbedLeaf = null;

  const checkLeaves = (branch) => {
    const leaves = Object.keys(branch);
    for (let i = 0, len = leaves.length; i < len; i++) {
      if (typeof branch[leaves[i]] === 'object') return checkLeaves(branch[leaves[i]]);
      if (!grabbedLeaf) grabbedLeaf = branch[leaves[i]];
      if (grabbedLeaf !== branch[leaves[i]]) return false;
    }
    return true;
  };
  return checkLeaves(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
