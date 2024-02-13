var rl=require('readline-sync');
var ans=Number(rl.question("\nEnter Number \n"))
if (isNaN(ans)){
    console.log("Worng input, enter a valid first number \n")
    return
    }
for(var i=0; i<5; i++){
    var userNumber=Number(rl.question("\nEnter Number \n"))
    if (isNaN(userNumber)){
        console.log("Worng input, enter a valid number \n")
        } else{
        const choice= rl.question("would you like to ___the current number to the previous number: \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder\n")
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
        }else {
            console.log("enter a valide option")
        } 
        console.log("The answer is "+ ans)
        }
}

