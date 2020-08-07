//     //Section 3 Array Methods with Callbacks

//     const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

//     const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
//     'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
//     'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
//     'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//     //Every
    
//     //1-Determine if every number is greater than or equal to 0
//         // const newNumArray = (currentValue) => currentValue >=0;
            
//         // console.log(nums.every(newNumArray))
//         //logs true

//     //2-determine if every word shorter than 8 characters 
//         // const newWordsArray = (currentWord) => currentWord.length < 8;
//         //     console.log(panagrams.every(newWordsArray))
//             //logs false
    
//     //Filter

//         //1-filter the array for numbers less than 4
//         // const newNunArray = (currentValue) => currentValue <4;
//         // console.log(nums.filter(newNunArray))
//         // //logs [ 1, 2, 3, 0 ]

//         // //2 -filter words that have an even length 
//         // const newWordsArray = (currentWord) => currentWord.length % 2 === 0;
//         // console.log(panagrams.filter(newWordsArray))
//         // /* logs
//         // [
//         // 'requires', 'zeal',     'from',
//         // 'wage',     'earner',   'vexing',
//         // 'daft',     'driven',   'help',
//         // 'my',       'quiz',     'Five',
//         // 'quacking', 'jolt',     'my',
//         // 'five',     'boxing',   'jump',
//         // 'Pack',     'my',       'with',
//         // 'five',     'liquor',   'jugs',
//         // 'We',       'promptly', 'judged',
//         // 'next',     'quaintly', 'kept',
//         // 'oxen'
//         // ] /*


//         //Find

//         //1-Find the first value divisible by 5
//         // const newNumArray = (currentValue) => currentValue % 5 === 0;
//         // console.log(nums.find(newNumArray))
//         //logs 5

//         // //2-find the first word that is longer than 3 characters
//         // const newWordsArray = (currentWord) => currentWord.length =3 ;
//         // console.log(panagrams.find(newWordsArray))
//         // //logs the

//         //Find Index
//         //1-find the index of the first number that is divisible by 3
//         // const newNumArray = (currentValue) => currentValue % 3 === 0;
//         // console.log(nums.findIndex(newNumArray))
//         // //logs 2
//         // //2-find the index of the first word that is less than 2 characters long
//         // const newWordsArray = (currentWord) => currentWord.length <2 ;
//         // console.log(panagrams.findIndex(newWordsArray))
//         // //logs -1 (as in none or n/a)

//         //For Each
//         //1-console.log each value of the nums array multiplied by 3
//         // const newNumArray = nums.forEach((value, index) => {
//         //     return (value * 3)
//         // });
//         // console.log(newNumArray)

//         //map
//         //1-make a new array of each number multiplied by 100
//         // const myNewArr = nums.map((value, index)=> {
//         //     return value * 100
//         // });
//         // console.log(myNewArr)
//         /* logs
//         [
//         100,  200, 300, 400,
//         500,  600, 700, 800,
//         900, 1000,   0
//         ]
//         */

//         //2-make a new array of all the words in all uppercase
//         // const myWordsArray = panagrams.map((value, index) => {
//         //     return value
//         // })
//         // console.log(myWordsArray)

//         //Some
//         //1-Find out if some numbers are divisible by 7 

//         const myNewArray = nums.some((value, index) => {
//             return value % 7 === 0;
//         });
//         console.log(myNewArray)
//         //logs true

//         //2-Find out if some words have the letter a in them
//         const myWordsArray = panagrams.some((value, index)=> {
//             return value.length = 'a'
//         })
//         console.log(myWordsArray)
//         //logs true
