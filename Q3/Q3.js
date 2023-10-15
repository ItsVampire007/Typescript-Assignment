"use strict";
//Name	Waseem shahzad
//Roll No	PIAIC223128
//Batch	Batch 47
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
let name1 = 'Waseem shahzad';
console.log(name1.toLowerCase()); // Output: waseem shahzad
console.log(name1.toUpperCase()); // Output: WASEEM SHAHZAD	
let titleCaseName = name1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(titleCaseName); //Output: Waseem shahzad
