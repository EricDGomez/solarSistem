/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...
  if (arr.length === 0) {
    return undefined;
  }
  let minVal = arr[0];
  let minResult = cb(arr[0]);
  for (let element of array) {
    const result = cb(arr[i]);
    if (result < minResult) {
      minResult = result;
      minVal = element;
    }
  }
  return minVal;
}

export function maxBy(array, cb) {
  // Your code goes here...
  if (arr.length === 0) {
    return undefined;
  }
  let maxVal = arr[0];
  let maxResult = cb(arr[0]);
  for (let element of array) {
    const result = cb(arr[i]);
    if (result > maxVal) {
      maxResult = result;
      maxVal = element;
    }
  }
  return maxVal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
