const { performance } = require('perf_hooks');
const assert = require('assert');
const { binarySearchTree } = require('../src/index');
const { first, second, third } = require('./trees');
describe('Binary Search Tree', function() {
  it('Test case First should return false', function() {
    let time = performance.now();
    const result = binarySearchTree(first);
    console.log(performance.now() - time);
    assert.equal(result, false)
  });
  it('Test case Second should return true', function() {
    let time = performance.now();
    const result = binarySearchTree(second);
    console.log(performance.now() - time);
    assert.equal(result, true)
  });
  it('Test case Third should return false', function() {
    let time = performance.now();
    const result = binarySearchTree(third);
    console.log(performance.now() - time);
    assert.equal(result, false)
  });
});