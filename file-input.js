const fs=require("node:fs");
const rl=require("readline-sync");

function writeNewBalance(){
    fs.writeFileSync("balance.txt",""+newBalance)
    console.log("Thank you for using Tom's bank,\n Your current balance is Nu."+newBalance +"\n")
}

const balance=Number(fs.readFileSync("./balance.txt", "utf8"))
var option=rl.question("Would you like to: \n1)Deposit \n2)Widthdraw \n3)Check Balance\n")


if (option ==="1" || option === "2"){
    var amount= Number(rl.question("Enter the amount: \n"))
    if (isNaN(amount)){
        console.log("Enter a vaild amount\n")
        process.exit(0);
    }else{
        
        if (option==="1"){
            var newBalance=balance+amount
            writeNewBalance();
    
        }else if (option === '2'){
            var newBalance=balance-amount;
            if(newBalance<0){
                console.log("Insufficiant funds, You are poor");
            } else {
                writeNewBalance();
            }
        }
    }

}else if (option === "3"){
    console.log("Your current Balance is Nu."+balance)
}else{
    console.log("please select a valid option!!!") 
} 
 
    