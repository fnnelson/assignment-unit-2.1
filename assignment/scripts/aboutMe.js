// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
const firstName = "Forrest";

// 2 - Create a second variable called `lastName` and assign it the value of your last name
const lastName = "Nelson";

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
const fullName = firstName + " " + lastName;

// or using the comma for a space in the console log
console.log(firstName, lastName);

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
const luckyNumber = 47;

// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log("My name is " + fullName + ", and I think " + luckyNumber + " is a winner!");

// another way I have learned in a class
let declaration = `My name is ${fullName}, and I think ${luckyNumber} is a winner!`;
console.log(declaration);

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "tacos";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
console.log(pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 1;

// 11 - Add two pets to your `pets` variable
pets += 2;
console.log(pets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

if (adventurous) {
    console.log("Adventures are great!");
} else {
    console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

if (luckyNumber == 2 && adventurous) {
    console.log("Roll the dice!");
} else {
    console.log("Call it quits!");
}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (allowedPets > pets) {
    console.log("I can have more pets!");
} else if (allowedPets == pets) {
    console.log("I have enough pets.");
} else {
    console.log("Oh no, I have too many pets!");
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

// Forrest: first attempt without research - I don't think this is what we're going for, but this at least works?  I can't think of how to define mostPets to be the higher number between pets and friendsPets, but I will keep thinking about it or doing research.

// let mostPets = "";

// if (pets == friendsPets) {
//     mostPets = "We're tied for pets."
//     console.log(mostPets);
// } else if (pets > friendsPets) {
//     mostPets = "I have the most pets!";
//     console.log(mostPets);
// } else {
//     mostPets = "My friend has more pets!";
//     console.log(mostPets);
// }

// Forrest: I think I found out how to define mostPets as the max of the 2 variables.  I'm not sure if the conditional was done perfectly here, but it at least works for this scenario.

let mostPets = Math.max(pets, friendsPets);

if (pets == friendsPets) {
    console.log("We're tied on pets.");
} else if (mostPets == friendsPets) {
    console.log("My friend has more pets!");
} else {
    console.log("I have the most pets!");
}

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

switch (luckyNumber) {
    case 1:
        console.log("First is the worst");
        break;
    case 2:
        console.log("Second is the best");
        break;
    case 3:
        console.log("Third is the one with the polka dot dress");
        break;
    default:
        console.log("Luck is what happens when preparation meets opportunity");
}

// Forrest: this was a cool one to learn with conditionals! Fun to think of conditionals like a current going through electrical switches, and the ones that match will "turn on" that code.

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

let goTravel = adventurous ? "Adventures are great!" : "How about we stay home?";
console.log(goTravel);

// or using a function based on what I read on MDN Web Docs.. might have some other uses

function doStuff(ifAdventurous) {
    return (ifAdventurous ? "Adventures are great!" : "How about we stay home?");
}
console.log(doStuff(true));

// Forrest: another cool one to learn - there are seemingly countless ways to do if/then statements