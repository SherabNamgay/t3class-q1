// const rl=require("readline-sync");

// for (var i=0; i<10; i++){
//     var reply=rl.question("give me a number!")
// }

// var i=0
// while (i<10){
//     console.log(i)
//     i += 1
// }

// var rl=require('readline-sync');
// var ans=Number(rl.question("\nEnter Number \n"))
// if (isNaN(ans)){
//     console.log("Worng input, enter a valid first number \n")
//     return
//     }
//     var i=0;
// while(i<1){
//     var userNumber=Number(rl.question("\nEnter Number \n"))
//     if (isNaN(userNumber)){
//         console.log("Worng input, enter a valid number \n")
//         } else{
//         const choice= rl.question("would you like to ___the current number to the previous number: \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder\n6)exit \n")
//         if (choice==='1'){
//             ans += userNumber
//         }else if(choice === '2'){
//             ans -= userNumber
//         }else if(choice ==="3"){ 
//             ans *=userNumber
//         }else if(choice==="4"){
//             ans /= userNumber
//         }else if(choice==="5"){
//             ans%= userNumber
//         }else if(choice ==="6"){
//             i += 1
//         }
//         else {
//             console.log("enter a valide option")
//         } 
//         console.log("The answer is "+ ans)
//         }
// } 

const rl=require("readline-sync")
const fs=require("node:fs")
var pwd= Number( rl.question("set a 4 digit password\n"))
if (isNaN(pwd) && pwd.length !== 4){
    console.log("please enter a number passcode!!!\n")
    return
}else{
    fs.writeFileSync("./pwd.txt", ""+pwd )
}

var i=0;
while(1<3){
    var password=Number(rl.question("enter your password"))
    pwd = Number(fs.readFileSync("./pwd.txt", "utf8"))
    if(password !== pwd){
        console.log('Incorrect password please try again\n')
        i++
    }else {
        console.log("you have sucessfully locked in!\n")
        return
    }
    
}
console.log("Too many attemps, try again later")


