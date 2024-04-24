#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n\t Welcomer to 'Zubair' Currency Convertor\n"));
// define the currencies of exchange rate
let exchange_rate = {
    "USD": 1, // base curruncy
    "EUR": 0.9, // Europeon currency (Euro)
    "JYP": 113, // Japnease currency (Yen)
    "CAD": 1.3, // Canadian currency (Doller)
    "AUD": 1.65, // Austrakian currency (Doller)
    "PKR": 278.50, // Pakistan currency  (PKR)
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert",
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount 
console.log(`converted amount = ${chalk.blue.bold(converted_amount.toFixed(3))}`);
