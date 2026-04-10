const add = require('./index');

if (add(2, 2) !== 4) {
  console.error("Test failed!");
  process.exit(1);
} else {
  console.log("Test passed!");
}