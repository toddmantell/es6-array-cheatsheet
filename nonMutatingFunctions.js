//**The functions below return a new array or single value and do not mutate the original array
const myArray = [1,2,3,4,5,6];
console.log(`original array values: ${myArray}`);

//.concat flattens two arrays into one without mutating the original arrays
let flattened = myArray.concat([7,8,9,10]);
console.log(`flattened values: ${flattened}`);

//.map transforms each item in the array however you specify in the callback
let mapped = myArray.map((item) => {
  return item + 1;
});

//.filter returns the items in the array filtered by however you specify in the callback
let filtered = myArray.filter((item) => {
  return item > 1 && item < 6;
});

//.reduce takes 4 arguments, 1st is the accumulator (we are using ES6 default to 0)
let reduced = myArray.reduce((accumulator = 0, currentValue) => {
  return accumulator + currentValue;
});

//.find returns the FIRST value that matches your criteria. Returns only a single value (or undefined)
let found = myArray.find((item) => {
  return item > 1;
});

console.log(`mapped values: ${mapped}`);
console.log(`filtered values: ${filtered}`);
console.log(`reduced values: ${reduced}`);
console.log(`found value: ${found}`);

//array.prototype.every checks the entire array and return true or false if all items in the array match the criteria
console.log(myArray.every((item) => {
  return item < 10;
}));

//.slice returns a new array with items starting at the index and taking the number of items specified by the second param
//Unlike SPLICE, it does NOT mutate the original array.  For that reason, favor slice over sPlice.
let sliced = myArray.slice(1,3);
console.log(`sliced values: ${sliced}`);
