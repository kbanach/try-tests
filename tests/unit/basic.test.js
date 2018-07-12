const assert = require('assert');

const testetModule = require('./fibonacci');

// #1 Function calculates Fibonacci number based on given index, eg. for index=2, should return 1
assert.equal(testetModule(2), 1, 'Function returned wrong output (should return 1)');

// #2 Function calculates Fibonacci number based on given index, eg. for index=5, should return 5
assert.equal(testetModule(5), 5, 'Function returned wrong output (should return 5)');

// #3 Function calculates Fibonacci number based on given index, eg. for index=10, should return 55
assert.equal(testetModule(10), 55, 'Function returned wrong output (should return 55)');

// #4 Function should return null when negative value is passed
assert.equal(testetModule(-1), null, 'Function returned wrong output (should return null)');

// #5 Function should return 0 when called with zero (0)
assert.equal(testetModule(0), 0, 'Function returned wrong output (should return 0)');

// #6 Function should throw an error when passed string
assert.throws(
    () => testetModule('2'), 
    'Function should throw'
);

// #7 Function should throw an error when passed an object
assert.throws(
    () => testetModule({}), 
    'Function should throw'
);



