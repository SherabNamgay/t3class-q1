// const rl=require("readline-sync");

// for (var i=0; i<10; i++){
//     var reply=rl.question("give me a number!")
// }

// var i=0
// while (i<10){
//     console.log(i)
//     i += 1
// }

var rl=require('readline-sync');
var ans=Number(rl.question("\nEnter Number \n"))
if (isNaN(ans)){
    console.log("Worng input, enter a valid first number \n")
    return
    }
    var i=0;
while(i<1){
    var userNumber=Number(rl.question("\nEnter Number \n"))
    if (isNaN(userNumber)){
        console.log("Worng input, enter a valid number \n")
        } else{
        const choice= rl.question("would you like to ___the current number to the previous number: \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder\n6)exit \n")
        if (choice==='1'){
            ans += userNumber
        }else if(choice === '2'){
            ans -= userNumber
        }else if(choice ==="3"){ 
            ans *=userNumber
        }else if(choice==="4"){
            ans /= userNumber
        }else if(choice==="5"){
            ans%= userNumber
        }else if(choice ==="6"){
            i += 1
        }
        else {
            console.log("enter a valide option")
        } 
        console.log("The answer is "+ ans)
        }
} 


 
