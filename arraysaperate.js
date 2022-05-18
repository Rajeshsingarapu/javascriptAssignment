const numbers = [4, 8, 2, 9, 4, 1, 3, 2, 6, 6];

let x = [];
let y = [];

for (var i = 0; i < numbers.length; i++) {
  
  for (var j = i+1; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
    
      x.push(numbers[i]);
     

    }
    else
    {
      y.push(numbers[j])
    }
    
  }
}

console.log(x);
console.log(y);
