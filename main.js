#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 12345 === 1234 -false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        // =, -=, +=
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
// console.log(pinAnswer.pin)
if (pinAnswer.pin === myPin) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: "select your account type",
            type: "list",
            choices: ["current Account", "saving Account"
            ]
        },
        {
            name: "transMethod",
            message: "select your transaction method ",
            type: "list",
            choices: ["cash withdrawal", "Fast cash"]
        },
    ]);
    if (atmQuestions.transMethod == "cash withdrawal") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        // Greater than or equals to oprator 
        if (myBalance >= cashwithdrawAmount.withdrawal) {
            myBalance -= cashwithdrawAmount.withdrawal; //myBalance = myBalance -cashwithdrawAmount
            console.log("Your Total Balance is " + myBalance);
        }
        else {
            console.log("Insuffcient Balance");
        }
    }
    else {
        let fastcashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select the amount you want to withdraw",
                type: "list",
                choices: ["1000", "3000", "5000", "7000"]
            }
        ]);
        if (myBalance >= fastcashAmount.fastCash) {
            myBalance -= fastcashAmount.fastCash; //myBalance = myBalance -cashwithdrawAmount
            console.log("Your Total Balance is " + myBalance);
        }
        else {
            console.log("Insuffcient Balance");
        }
    }
}
