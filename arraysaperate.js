const numbers = [4, 8, 2, 9, 4, 1, 3, 2, 6, 6];

let x = [];
let y = [];

for (var i = 0; i < numbers.length; i++) {
  var count = 0;
  for (var j = 0; j < numbers.length; j++) {
    if (i !== j) {
      if (numbers[i] == numbers[j]) {
        count++;
      }
    }
  }
  if (count === 0) {
    x.push(numbers[i]);
  } else if (y.indexOf(numbers[i])===-1) {
    //console.log("his"+numbers[i])
    y.push(numbers[i]);
   }
  
}
console.log(x);
console.log(y);


