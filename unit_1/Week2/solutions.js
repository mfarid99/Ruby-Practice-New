//Verbal Questions
//1-What is the difference between a parameter and an argument?
//The argument is the input, the parameter is how the input is represented in the function.
//2-Within a function, what is the difference between return and console.log?
//the difference is that the output value of a function can not come from a console.log. A function is only defined if it has a return value. 

//Palindrome
//Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.


let word1 = "Borscht"
let word2 = "Radar"

const checkPalindrome = (string) =>{
    string = string.toLowerCase();

    return string === string.split('').reverse().join('');
}

    console.log(checkPalindrome(word2))


///////////Sum Array
//////////////////////////////////

//Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. 

const totalNum = (arr) => {

    let sum = 0
    for (let i=0; i<arr.length; i++) {
    sum = sum + arr[i];
}

    return sum;

}

    sumArray = totalNum([1, 2, 3, 4, 5, 6])
    console.log(sumArray)

/////////////Prime Numbers
//////////////////////////////

//Step One Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.


        const checkPrime = (input) => {
            let prime = true;
            for (let i = 2; i <= Math.sqrt(input); i++) {
                if (input % i == 0) {
                    prime = false;
                    break;
                }
            }
            return prime && (input > 1);
            
        }
         
            console.log(checkPrime(9));

            

//Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
//This function can call on the previous checkPrime function.

//const printPrimes = (checkPrime <= input) 
//console.log(printPrimes(99))

//Rock Paper Scissors
//Need Help


  
    
    






