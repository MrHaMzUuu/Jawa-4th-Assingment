
//ALERTS

// alert("Error! Please enter a valid password");
// alert("Welcome to JS Landing(Happy Coding)");

//VARIABLES FOR STRINGS

// var UserName = "Mark";
// alert(UserName);

// var myName = "Jhone Doe";
// alert(myName);


// VARIABLES FOR NUMBERS

// var age = "I am 15 years old";
//  alert(age);



//MATH EXPRESSIONS

// var english = +prompt("Total Marks Of English");
// var maths = +prompt("Total Marks Of Maths");
// var urdu = +prompt("Total Marks Of Urdu");
// var isl = +prompt("Total Marks Of Isl");
// var computer = +prompt("Total Marks Of Computer Science");
// var totalmarks = english + maths + urdu + isl + computer;
// var percentage = totalmarks/500 *100;
// console.log(percentage);

//ARRAYS AND LOOP

// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
    


