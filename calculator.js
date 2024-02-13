// var rl = require('readline-sync');

// var num1=Number(rl.question("Enter first number \n"))

// if (isNaN(num1)){
//     console.log("Worng input, enter a valid first number \n")
//     return
//     } else{
//         var num2=Number(rl.question("Enter second number \n"))
//         if(isNaN(num2)){
//         console.log("Worng input,enter a valid second number \n") 
//         return
//     }
//     const choice= rl.question("would you like to \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n")

//     if (choice==='1'){
//         var sum=num1+num2
//         console.log("The sum of the numbers are " +sum)
//     }else if(choice === '2'){
//         var difference=num1-num2
//         console.log("The diffrence of the numbers are "+ difference)
//     }else if(choice ==="3"){
//         var product=num1*num2
//         console.log("The product of the numbers are "+ product)
//     }else if(choice==="4"){
//         var quotient = num1/num2
//         console.log("The quotient of the numbers are " + quotient)
//     }else {
//         console.log("enter a valide option")
//     }

// }

var rl = require('readline-sync');

var num1=Number(rl.question("Enter first number \n"))

if (isNaN(num1)){
    console.log("Worng input, enter a valid first number \n")
    process.exit(0)
    } else{
        var num2=Number(rl.question("Enter second number \n"))
        if(isNaN(num2)){
        console.log("Worng input,enter a valid second number \n") 
        process.exit(0)
    }
    const choice= rl.question("would you like to \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder\n")

    if (choice==='1'){
        var ans=num1+num2
    }else if(choice === '2'){
        var ans=num1-num2
    }else if(choice ==="3"){
        var ans=num1*num2
    }else if(choice==="4"){
        var ans = num1/num2
    }else if(choice==="5"){
        var ans=num1%num2
    }else {
        console.log("enter a valide option")
    }
    console.log("The answer is "+ ans)
}
 
