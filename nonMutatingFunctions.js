//**The functions below return a new array or single value and do not mutate the original array
const myArray = [1,2,3,4,5,6];
console.log(`original array values: ${myArray}`);

//concat flattens two arrays into one without mutating the original arrays
let flattened = myArray.concat([7,8,9,10]);
console.log(`flattened values: ${flattened}`);

let mapped = myArray.map((item) => {
  return item + 1;
});

let filtered = myArray.filter((item) => {
  return item > 1 && item < 6;
});

//reduce takes 4 arguments, 1st is the accumulator (we are using ES6 default to 0)
let reduced = myArray.reduce((accumulator = 0, currentValue) => {
  return accumulator + currentValue;
});

let found = myArray.find((item) => {
  return item > 1;
});

console.log(`mapped values: ${mapped}`);
console.log(`filtered values: ${filtered}`);
console.log(`reduced values: ${reduced}`);
console.log(`found value: ${found}`);

//array.prototype.every checks the entire array and return true or false
console.log(myArray.every((item) => {
  return item < 10;
}));

let sliced = myArray.slice(1,3);
console.log(`sliced values: ${sliced}`);