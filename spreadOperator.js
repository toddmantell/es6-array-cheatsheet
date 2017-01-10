//Spread operator is useful for simplifying concat operations
let concatenated = myArray.concat([7,8,9,10]);
let concatenated2 = [...myArray, 7,8,9,10];
console.log(...concatenated);
console.log(...concatenated2);
//notice difference with above, which spreads out the values, below includes all values and commas
console.log(`${concatenated2}`);
