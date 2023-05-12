/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = {};
  data.asteroids.forEach((asteroid) => {
    if (yearCounts[asteroid.discoveryYear]) {
      yearCounts[asteroid.discoveryYear]++;
    } else {
      yearCounts[asteroid.discoveryYear] = 1;
    }
  });
  let maxCount = 0;
  let maxYear;
  for (const year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxCount = yearCounts[year];
      maxYear = year;
    }
  }
  return parseInt(maxYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
