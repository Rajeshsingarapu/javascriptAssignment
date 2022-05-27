const numbers = ['one', 'two', 'one', 'four', 'five', 'one', 'three'];
let count = 0;

for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] == 'one') {
    count += 1;
  }
}
console.log(count);
position = numbers.lastIndexOf('one');
numbers[position] = '1';
console.log(numbers)
//we can do this another way also
// let replace = numbers.fill('1', 5, 6);

// console.log(replace);
