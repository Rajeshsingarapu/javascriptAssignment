//Please find the below assignment and link
// Find the no of the probability of buying 100 fruits for 100 rupees. And print the values of combinations.
// Sample Input: ****[Bannana - 5rs, Orange - 1rs, mango – 0.5rs]
// Sample Output: [{  Bannana - 1,  Orange – 91,  mango – 8 }, {Bannana - 2,  Orange – 82,  mango – 16},{......]

let myArray = [];

let obj = {};

for (let i = 1; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    for (let k = 1; k < 100; k++) {
      if ((i + j + k === 100) && (5 * i + 1*j + 0.5 * k) === 100) {
        myArray.push({ banana: i, orange: j, mango: k });
        console.log(i,j,k)
      }
    }
  }
}

console.log(myArray);
