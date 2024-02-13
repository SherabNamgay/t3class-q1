var rl= require('readline-sync');
const converter = require('convert-string-to-number'); // default export
var number1= Number (rl.question("input the first number to add..."))
var number2= Number (rl.question("input the second number to add..."))

console.log(number1+number2)