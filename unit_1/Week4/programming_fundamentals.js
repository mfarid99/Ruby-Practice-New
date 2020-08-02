// SECTION 1 : PROGRAMMING FUNDAMENTALS

//Write a ~1 sentence summary for each one

//DRY: It stands for "Don’t repeat yourself" and it is a principle of software development aimed at reducing repetition.

//KISS: It stands for "Keep It Simple Stupid" by avoiding complexity if possible with simplicty being the goal. 

//Avoid creating a YAGNI:It stands for "You aren’t going to need it" which means you should not try to add functionality until you need it. 

//Do the simplest thing that could possibly work: It is a principle to follow to stay on the path of simple design which is consistent with KISS

//Don't make me think: It is the principle that makes a code easily read and understood by someone else which emphasizes simplicity and being clear. 

//Write code for the maintainer: It has to do with making the code clear for the purpose of maintenance which is the most expensive and time consuming phase of any project. 

//Single responsibility principle: It is programming principle that states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function. 

//Avoid premature optimization: Make sure your code is working before you consider optimization. 

//Separation of concerns: Different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// /Which ones surprise you (if any)?
//Avoid premature optimization surprises me as my mindset was approaching programming from a perfectionist point of view and that the more optimized the code is, the easier and simpler it would end up being. 

//Which one is currently giving you the most struggle?
//DRY

//Commenting Code
//Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// //This is a function with variable f and l as parameter
// const f = l => {
// //Setting variables es is 0, p is 0, c is 1 and n is 0
//     let es = 0, p = 0, c = 1, n = 0
//     //While loop with c is smaller or equal to l
//     while (c <= l) {
//     //variable n  is equal c + p
//       n = c + p;
//       //array c,p is equal n, c
//       [c, p] = [n, c]
//       //if c is an even number, then es is added to c
//       es += (c % 2 === 0) ? c : 0
//     }
//     //return value of es
//     return es
//   }
  
//   console.log(f(88))


