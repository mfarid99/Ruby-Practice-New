//Section 1

//1-DRY stands for: Do Not Repeat Yourself. We should pay attention to it as it is inefficient to write 1000’s of lines of code to reach the same result that can be achieved using a few lines of code.
// Shortcuts are used to perform repetitive tasks.  For DRY code we learned While Loop, For Loop.

// 2- Const: variables are constant and do not change

//Let: Used when you intend for the value of variable to change

//Var: Its declaration is similar to let. Most of the time we can replace let by var. It is not used in modern scripts. 

//Section 2

//a<b
//c>d
//‘Name’ ==’Name’
//a<b<c
//a==a<d
//e==’Kevin’
//48!=’48’
//f!=e
let g = 0
console.log(g);
//result = 0

let g = b+c
console.log(g);
//result = 110

// used let since we changed value of g. var could work too. Const would not work as it does not accept value change. 
//var, let ok. Const provided the following error: (console.log it and document the error)
//write 10 = g and document error. Cannot start with a number!

//Section 3

//The following code is an infinite loop because it does not have a “false” command to stop it from running. 

//while (true) {
//	console.log('Do not run this loop');}

//The following code is NOT an infinite loop as it has the “false” command which stops it from running once the expression is false. 

//const runProgram = true;

//while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;}

//let letters = "A";
//let i = 0;
// start a while loop that will run as long as i is smaller than 20
//while (i < 20) {
// the += operator is used to concatenate strings which adds A’s to each other instead of the traditional line by line layout. 
	//letters += "A";
// increments the value of i by 1
	//i++; }
// prints the value of letters to the screen/Terminal window
//console.log(letters);

//Section 4

//A for loop does the same thing as a while loop, but all the 'baggage' is conveniently compacted into the syntax, leaving less room for infinite loops. We don't have to declare any variables outside of the loop like we do with while loops.

// for (let i = 0; i < 100; i++) {
//	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');}
//The first part of the control panel is: let i=0 which is the initial code supplied to the loop 
//The second part of the control panel is i = <100 which the condition under which the loop runs 
//The third part of the control panel is i++ which is a repeating expression that runs at the end of each loop 

//for loop II

for (let x=0; x<=999; x++) {
console.log(x); 
}

// Bonus Challenge: \ is used within quotation mark before ‘s to indicate that ‘ is part of the string. // is to indicate a commentary and not a code. 

//For loop in reverse:

for (let y=999; y>-1; y--) {console.log(y);} 

//More counting

for (let y=999; y>-1; y--) {console.log(y);}

//Iteration

//Bonus Challenge

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin", "i"];
console.log(StarWars[2,4,6]);









