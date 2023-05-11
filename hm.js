const prompt = require("prompt-sync")({ sigint: true });
let person = prompt("Please enter your name", "Harry Potter");
console.log(person);
