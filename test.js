/*
var str="hello"
var reverse = ""
for (let i = str.length; i >=0; i--) {
    reverse= reverse+(str[i])
    return reverse
}
console.log(reverse)
*/


// function findSmallestInt(args){
//     args.forEach(element *2)
//     return args
// }
// console.log(findSmallestInt([1,2,3,4]))

//  to double the value in array

// function maps(x){
//     return x.map(n => n*2)
// }
// console.log(maps([1,2,3,4]))

// function that returns an array of integers from n to 1

/*
const reverseSeq = n => {
    var a=[]
    for(var i=n; i>0; i--){
      a.push(i)
    }
    return a;
  }; 
 console.log( reverseSeq(5))
*/

// number to string
/*
function numberToString(num) {
    return num.toString();
  }
console.log(typeof(numberToString(123)))
*/

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
/*function areYouPlayingBanjo(name) {
return name + (name[0].toLowerCase() == "r"? " plays" : " does not plays") + " banjo"
  }
  console.log(areYouPlayingBanjo("rolf"))
  */

// array and sum them up
/*
function sum(numbers){
    // var sum=0;                     // my try
    // if (numbers[0]!== undefined){ 
    //     numbers.forEach(element => {
    //         sum+= element
    //     });
    //     return sum
    //  }
     
    return numbers.reduce((a,b) => a+b,0)
}
console.log(sum([0]))
*/

/*// Q)counting sheeps in array
var sheep=[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(sheep){   // my try
    var count=0;
   sheep.forEach(element => {
    element? count++ : count
   });
   return count
}
// function countSheeps(sheeps) {   // best pratice
    // return sheeps.filter(Boolean).length;
//   }

console.log(countSheeps(sheep))
*/

// Q) Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// function basicOp(operation, value1, value2){ // my code
//     var ans=null;
//    if (operation == "+"){
//     ans = value1 + value2  
//    }else if(operation== "-"){
//     ans= value1 - value2
//    }else if (operation == "*"){
//     ans= value1 * value2
//    }else if (operation == "/"){
//     ans= value1/value2
//    }
//    return `${value1} + ${value2}  ${ans}`
// }
// function basicOp(o, a, b) {
//     return eval(a+o+b);
    
//   }
// console.log (basicOp("+", 4,7))

// function decipher(codedMessage){
//   var alpabet="abcdefghijklmnopqrstuvwxyz" 
//   for (var i=0; i<codedMessage.length; i++){
//     var decoded= codedMessage[i]
//   }
// }

// console.log("hell".startsWith()==="o o".startsWith() && "hello".endsWith() === "hoj ji".endsWith())
// function feast(beast, dish) {
//   if(beast.startsWith(beast[0]) === dish.startsWith(dish[0]) && beast.endsWith(beast[beast.length-1]) === dish.endsWith(dish[dish.length-1])){
//     return true
//   }else{
//     // return false
//     console.log("y")
//   }
// }
// console.log("chickad".startsWith("denc"[0]))
// if(true){

// }else if(false){

// }

// //console.log(feast("chickad", "chocolate cake"))

// function XO(str) {
//   var countx=0
//   var counto=0
//   for (var i=0; i<str.length; i++){
//     if(str[i] == "x" || str[i]== "X"){
//       countx+=1
//      }if (str[i]== "o" || str[i] == "O"){
//       counto+=1
//       }
//     }
//    return countx == counto ? true: false;
// }

// var summation = function (num) {
//   var sum=0
//   for (var i=0; i<=num; i++){
//     sum = sum + i
//     // console.log(i)
//     console.log (sum)
//   }
//   return sum
// }
// console.log(summation(1))

// function accum(s) {
//   var result=""
//   for (var i=0; i<s.length; i++){
//     result += s[i].repeat((i+1))+"-"
//   }
//   return result
// } 

// console.log(accum(s))

var s ="adfadfewafdF"
// function accum(s) {
//   var array=s.split("")
//   var result=[]
//   for (var i=0; i<array.length; i++){
//     result.push(array[i].toUpperCase())
//     result[i]= result[i]+array[i].toLowerCase().repeat((i))
//   }
//   return result.join("-")
// } 


function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum(s))