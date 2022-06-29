/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

We can solve this through the use of regular expressions. This can be one of the shortest way. Otherwise you can apply if else statement.
*/
function validatePIN (pin) {
  var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
return isNumber
}
// for the pin validation you need to call the function by paasing a pin value as shon below:
//validatePIN(1234);
//result will be true


/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

First we need to do the sum of the array elements with initial value '0' if array is empty.
Then we need to put if else statement for checking whether the sum is even or odd.
*/

function oddOrEven(array) {
   let sum = array.reduce((a, b) => a + b, 0);
  if (sum % 2 == 0){
    return 'even';
  } else return 'odd';
}
