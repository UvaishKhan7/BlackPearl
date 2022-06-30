/*
Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
*/
const myArray = [];

let i = 0;
while (i<=5 && i>=0){
  myArray.push(i);
  i++;
}
console.log(myArray.reverse())
