#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 48000;
let myPin = 2024;

let pinAnswer = await inquirer.prompt([
    {
        name : "pin",
        type : "number",
        message : "Please enter your pin number."
    }
]);

if(pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("Correct pin, you may proceed to the next step."));

    let operationAns = await inquirer.prompt([
        {
            name : "operation",
            type : "list",
            choices : ["Withdraw", "Check Balance"],
            message : "Select one of the options below :"
        }
    ]);

    if(operationAns.operation === "Withdraw") {

        let amountAns = await inquirer.prompt([
            {
                name : "amount",
                type : "number",
                message : "How much do you want to withdraw?"
            }
        ]);

        myBalance -= amountAns.amount
        console.log(chalk.greenBright(`Your remaining cash is : ${myBalance}`));
    }

    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.blueBright(`Your current bank balance is : ${myBalance}`));
    }
}

else {
    console.log(chalk.redBright("Incorrect pin, please try again."));
};