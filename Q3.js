// arr  of numbers 
const arr = [0, 1, 3, 0, 8, 6, 7, 0];
let counter = 0;

for (let i = 0; i < arr.length; i++) {
  counter += arr[i] == 0 ? 1 : 0;
}

console.log(counter);
