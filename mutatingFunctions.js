const myArray = [1,2,3,4,5,6];
console.log(`original array values: ${myArray}`);

//use slice instead, unless you need to mutate the original
const newArray = [1,2,3,4,5,6];
//splice(index, how many values to take)
let spliced = newArray.splice(1, 2); //returns new array with [2,3]

console.log(`spliced values: ${spliced}`);
console.log(`spliced has mutated the array: ${newArray}`);

let sliced = myArray.slice(1,3);
console.log(`sliced values: ${sliced}`);


//sort automatically sorts alphabetically or numerically (though not always sequentially)
const sortArray = [6,9,1,8,3,5];
console.log(`original array values: ${sortArray}`);

sortArray.sort();
console.log(...sortArray);