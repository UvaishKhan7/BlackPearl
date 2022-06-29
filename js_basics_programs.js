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
