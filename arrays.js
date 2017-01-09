const myArray = [1,2,3,4,5,6];
console.log(`original array values: ${myArray}`);

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

//splice mutates the existing array, so use slice instead
const newArray = [1,2,3,4,5,6];
//splice(index, how many values to take)
let spliced = newArray.splice(1, 2); //returns new array with [2,3]

console.log(`spliced values: ${spliced}`);
console.log(`spliced has mutated the array: ${newArray}`);

let sliced = myArray.slice(1,3);

console.log(`sliced values: ${sliced}`);

