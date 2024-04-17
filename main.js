#! /usr/bin/env node
// Import the inquirer 
import inquirer from "inquirer";
// Declare a constant answer
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answer.Sentence.trim().split(" ");
//Print the array[]
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
