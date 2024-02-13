var rl=require("readline-sync");

function getNumberFromUser(){
    var reply=rl.question("Give me a number");
    var numberOrNot=Number(reply);
    
    if (isNaN(numberOrNot)){
        throw "Input must be a valid number."
    }else{
        return numberOrNot
    }
}
try {
    var a= getNumberFromUser()
    console.log(a)
    var b= getNumberFromUser()
    console.log(b)
} catch (err){
    console.log(err)
}