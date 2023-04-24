

// // Example 1
// if (1 == 1) {
//     console.log("Harry Potter");
// }

// // Example 2
// let rating = 0;

// if (rating >= 3) {
//     console.log("You're not a superstar!");
// }
// else if (rating === 2) {
//     console.log("Meets expectations");
// }
// else if (rating === 1) {
//     console.log("Needs Work...");
// }
// else {
//     console.log("Not available for review");
// }


// // Example 3

// let num = 37;
// if (num % 2 !== 0) {
//     console.log("Odd Number");
// } 

// // Example 4
// let highScore = 1430;
// let userScore = 1200;

// if (userScore >= highScore) {
// console.log(`Congrats! You have the new high score of ${userScore} !`); 
// highScore = userScore;
// }
//     else { 
//         console.log(`Sorry! Your score of ${userScore} did not beat the high score of ${highScore}. GAME OVER!`);
//     }
 
//     //Example 5 - "Nesting" Passwords
// let password = 'HarryPotter';

// if(password.length >= 6 && password.indexOf(' ') === -1 && password.indexOf(num)) { 
//     console.log(`Valid Password`); 
// }
// else {
//     console.log(`Invalid Password`);
// }

// // Example 6 - Truthy & Falsey Values
// let mystery = 1;

// if (mystery){
//     console.log("Truthy");
// } 
// else {
//     console.log("Falsey");
// }

// // fill username in for log in
// let loggedInUser = '';

// if(loggedInUser) {
//     console.log(`You are logged in!`);
// }
//  else {
//     console.log(`Please Log In`);
//  }    

//  // Logical Operators - && || and ! Example 7

//  let number = 3;
 
//  if(number >= 1 && number < 11) {
//     console.log(`Number is between 1 & 10`);
//  }
//  else {
//     console.log(`number is not between 1 & 10`);
//  }

//  // Example 8 - 39

//  let age = 40;

//  if (age < 6 || age >= 65) {
//     console.log(`You get in for free!`)
//  }
//  else {
//     console.log(`You must pay!`);
//  }

//  //purple orchid violet 

//  let color = "violet"; 
//  if(color === 'purple' || color === 'lilac' || color === 'violet') {
//     console.log(`Great Choice!`);
//  }
//  else {
//     console.log(`I don't like that one`);
//  }


//  // Section 40 ! NOT

// //if no logged in user, do something

// if(!loggedInUser){
//     console.log(`Get out of here!`)
// }


// let flavor = "watermelon";

// //if(flavor !== 'grape' && flavor !== 'cherry') {
//     //console.log(`We don't have that flavor...`);
// //}
// // ! takes makes the entire statement false. quicker than the above syntax
// if(!(flavor === 'grape' || flavor === 'cherry')) {
//     console.log(`we only have grape & cherry!`);
// }



// // section 42
// let day = 7;

// if (day === 1) {
//     console.log(`Monday`);
// }
// switch(day) {
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2: 
//         console.log(`Tuesday`);
//         break;
//     case 3: 
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thursday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Saturday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
//         default:
//         console.log(`Invalid Day`)
// }

// // example 43 - Ternary operator

// let bum = 8;

// if (bum === 7) {
//     console.log(`Lucky!`);
// }
// else {
//     console.log(`Bad Luck!`);
// }

// //Ternary Way
// bum === 7 ? console.log('Lucky!'): console.log(`Bad luck!`)


// let onlineStatus = 'online';

// let statusColor = onlineStatus === 'offline' ? 'red' : 'green';

// console.log(statusColor);

// // Arrays & Objects - Section 5
// // Arrays - Collections of Values or data... example: containers with data, list of comments on IG post, collection of levels in a game, songs in a playlist.  This usually has a specific order unless otherwise specified. 
// // use [] to make an array. EX: can be used with any value, boolean, number, etc.
// let shoppingLists = ['cereal', 'cheese', 'ice'];

// let lotto = [45, 13, 24, 11, 3];

// let myCollection = [12, 'dog', true, null, NaN];

// //Arrays are indexed, like strings. Accessed 1 at a time, and starts at 0 > [0], [1], [2] [3]

// let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigio', 'violet'];

// //modifying arrays

// let shoppingList = ['Cheddar Cheese', '2% Milk'];
// // to change values in arrays
// shoppingList[1] = 'Whole Milk';
// shoppingList[2] = 'Ice Cream';
// //to add to end... no matter how long the list, this will always add to end
// shoppingList[shoppingList.length] = 'Tomatoes';
// shoppingList[shoppingList.length] = 'Chicken';

// // .Push & .Pop - .Shift & .Unshift, adding to end, removing from end, removing from start, adding from start.
// // MDN has a really long list of JS methods

// let topSongs = [
//     'Drake - Connect',
//     'Kendrick Lamar - Money Trees', 
//     'J.Cole - The Climb Back',
//     'Drake - Major Distribution'
// ];
// topSongs.push('The Weekend - The Morning');
// topSongs.push('PartyNextDoor - Welcome to the Party');
// console.log(topSongs);
// // topSongs.pop();   This will remove last array. Does not need value specified. Removes value then returns it




// // Lesson 48 - Shift & Unshift
// // unshift adds one more array to the beginning
// let dishesToDo = ['Big Platter'];
// dishesToDo.unshift('Large Plate');
// dishesToDo.unshift('Small Plate');
// dishesToDo.unshift('Cereal Bowl');
// dishesToDo.unshift('Mug');
// dishesToDo.unshift('Spoon');
// console.log(dishesToDo);

// //shift removes from front. Does not need value. these values go in order
// dishesToDo.shift();
// dishesToDo.shift();
// console.log(dishesToDo);




// // Lesson 49 - Concat
// // creates a new version with multiple arrays

// let fruits = ['apple', 'banana'];
// let veggies = ['lettuce', 'spinach'];
// let meats = ['steak', 'chicken breast'];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));
// allFoods = fruits.concat(veggies, meats);
// console.log(allFoods);




// //lesson 50 - includes & indexOf

// let ingredients = [
//     'water', 
//     'corn starch',
//     'flour',
//     'cheese',
//     'brown sugar',
//     'shrimp',
//     'eel',
//     'butter'
// ];

// // ingredients.includes('fish');
// // ingredients.includes('water');
// // ingredients.includes('water', 0);

// if (ingredients.includes('flour')); {
//     console.log(`I'm Gluten Free! I can't eat that`) ;
// }

// ingredients.indexOf('eel'); // this returns 6 in the console
// ingredients.indexOf('cheese', 2); // returns 3, which is correct



// ingredients.indexOf('flour' !== -1);

// // lesson 51 - Join & reverse
// // Reverse, reverses the array
// let letters = [ 'A', 'B', 'C'];
// // logs in A, B, C order
// console.log(letters.reverse());
// // Logs as C, B, A

// // Join takes all elements and joins into one string

// console.log(letters.join());
// console.log(letters.join('&'));
// console.log(letters.reverse().join('-'));
// console.log(letters.reverse().join('-'));




// // Lesson 52 - Slice

// let animals = ['Shark', 'Dolphin', 'Whale', 'Orca'];
// // you have to go one index further to include last index - see below
// let swimmers = animals.slice(0, 4);
// // console displays all animals
// let mammals = animals.slice(1, 5);
// // console displays dolphins - orca
// let finnedAnimals = animals.slice(0, 4);
// //console displays: all animals
// // this displays them in from right to left instead of left to right
// console.log(animals.slice(-4, -2));




// // lesson 53 - splice, adds to middle of array
// // .splice(Start, # of items to remove, add values)
// console.log(animals.splice(1, 0, 'Octopus'));
// console.log(animals);
// // start index is 3, removing 0 items, adding 2 values listed in ' ' ;
// animals.splice(3, 0, 'Eel', 'Mermaid');
// console.log(animals);
// // start index is 0, delete 2 items, Add 2 values ' ' at end
// animals.splice(0, 2, 'Pirate', 'Ship');
// console.log(animals);



// // Lesson 54, sorting
// // sorts elements or array in order and returns the array
// let people = ['Kaleb', 'Olivia', 'Crystal', 'Kim'];

// console.log(people.sort());
// // for some reason numbers sort by comparing strings to UTF-16 values... don't sort numbers with sort
// let digits = [10, 100000, 34, 67, 99];
// console.log(digits.sort());



// // lesson 55 - Intro to Reference Types
// let apples = "golden";
// let rainbow = apples;
// // apples = 'Green apple';
// // rainbow still === 'golden'
// // This is creating a value tupe variable. JS stores all variables in memory. Value type variables store values in memory
// // Arrays are different. The variable itself doesn't hold the array, instead it holds a pointer to the actual array. therefore, if you update an array [], it updates with the new called array as well.



// // lesson 56 - Const & arrays
// // the city can't be listed twice with const unless....
// //const city = 'Houston';
// //let city = 'Dallas';

// const myEggs = ['brown', 'brown'];
// myEggs.push('purple');
// myEggs[0] = 'green';
// console.log(myEggs); // We can change internals of Array, we just can't point to a new array or string
// //EXample
// const myCity = ['Houston'];
// myCity.push('San Antonio');
// myCity.unshift('Austin');
// console.log(myCity);



// //Lesson 57 - Working w/ Nested Arrays
// // we can store arrays inside other arrays

// // this grid below is also how you start boards or grids. ex, tic-tac-toe, checkers, chess, rubix cubes
// const animalPairs = [
//     ['doe', 'buck'],
//     ['ewe', 'ram'],
//     ['puppy', 'dog']
// ];
// // in console, 
// //animalPairs[2] 
// // returns puppy, dog
// //animalPairs[2][0]
// // returns puppy
// //animalPairs [0][1] = 'stag'
// // returns 'stag'



// // Section 6, lesson 58 - Objects
// // specify labels in an object like example below
// // Objects are collections of properties - An object is not an array
// // properties are pairs of information, key-value pair
// // rather than accessiing data using an index, we use custom keys
// //const fitBitData = {
//    // totalSteps          : 308727,
//    // totalMiles          : 211.1,
//    // avgCalorieBurn      : 5755,
//   //  workoutsThisWeek    : '5 of 7',
//    // avgGoodSleep        : '2:13'
//     //Keys              values
// //};

// // {} <- this syntax is an object literal
// const fitBitData = {
//     totalSteps          : 308727,
//     totalMiles          : 211.1,
//     avgCalorieBurn      : 5755,
//     workoutsThisWeek    : '5 of 7',
//     avgGoodSleep        : '2:13',
//     45                  : 'forty-five',
// };
// // to access data -  in the console = FitBitData.totalMiles = 211.1

// //let data = {a: 1};
// //let stuff = {b: 2, c: 3, d: 4} // need commas to separate properties. last comma is optional



// // Lesson 60 - keys are converted to Strings
// // need to use array brackets in console to call values
// const integers = {
//     100            : 'one-hundred',
//     16             : 'sixteen',
//     '76 trombones' : 'great song'
// };
// // turns 100 into '100' 
// // call to console > integers[100]  ->  returns 'one-hundred'
// // why use square brackets? sometimes you use JS names that are invalid names
// // to access with space, you need [] brackets ex integers.['76 trombones']

// // examples of how to pull colors:
// //const pallete = {
//     //red     : '#eb4d4b',
//    // yellow  : '#f9ca24',
//    // blue    : '#30336b'
// //};

// //let mysteryColor = 'yellow';

// // Lesson 61 - Adding or updating properties
// // you can have an empty object and add them in with keys + arrays
// const userReviews = {};
// userReviews['queenBee49'] = 4.0; // returns user: 4.0
// userReviews.mrSmith78 = 3.5; // returns user: 3.5
// //results = user + rating 

// userReviews['queenBee49'] += 2; // returns user: 6
// userReviews.mrSmith78++; // returns user: 4.5

// const student = {
//     firstName: 'David',
//     lastName : 'Jones',
//     strengths: ['Music', 'Art'],
//     exams    : {
//         midterm: 92,
//         final   : 88
//     }
// };
// // how to average them together
// const avg = (student.exams.midterm + student.exams.final) / 2; // returns 90

// const shoppingCart = [
//     {
//         product : 'Jenga Classic', 
//         price   : 6.88,
//         Quantity: 1

//     },
//     {
//         product : 'Echo Dot', 
//         price   : 29.99,
//         Quantity: 3   
//     },
//     {
//         product : 'Fire Stick', 
//         price   : 39.99,
//         Quantity: 2
//     }
// ];


// // lesson 63 = objects and references types
// const palette = {
//     red     : '#eb4d4b',
//     yellow  : '#f9ca24',
//     blue    : '#30336b'
// };
// // this code below updates the original palette object by referencing it
// const palette2 = palette;
// palette2.green = '#ebf876';
// // they refer to same objects.. constant can't change but content can
// // Objects and Arrays, use const. primatives = let

// let intervals = [1,2,3];
// let mysterty = [1,2,3];
// // intervals doesn't store array, it only stores a reference to the arrya. using === in console will result in a falsy statement
// let moreIntervals = intervals;
// // this will result in a truthy statement since it = the original intervals directly

// const userEmail = {
//     username        : 'CherryGarcia8',
//     email           : 'garcia@gmail.com',
//     notifications   : [1]
// };
// // if not username notifications = a number, then return "no new notifications"
// if (!userEmail.notifications.length) {
//     console.log('No New Notification');
// } else {
//     console.log(`You have ${userEmail.notifications.length} new notification!`)
// };

// // Section 7 - Lesson 65 Intro to Loops
// // Repeat code with logic. for example. game loop until game over...
// // More use cases than repeating logs. 
// // Loops - Doing things repeatedly. Print 'Hello' 10 times, sum all numbers in array.
// // 4 Loop types: for, while, for...of, for...in

// //console.log('Hello');
// //console.log('Hello');
// //console.log('Hello');
// //Or 
// //console.log(arr[0]);
// //console.log(arr[1]);
// //console.log(arr[2]);

// //10 total times
// //5 initial starting value
// //10 - How many times to run the loop
// // +1 how to change value each time
// //for (let i = 5; i <=10; i++) {  //++ loops by 3, Or +=3, loop by 3.
// //console.log('Hello', i);
// //} 

// //for (let k = 1; k <= 21; k++) { // start at one and loop 21 times, adding 1 each time
// //console.log(`${k}x${k} = ${k * k}`); // 1 x 1, 2 x 2... display the expression, then display the actual function
// //}
//  //for (let i = 200; i>= 0; i-=25) { // while i is > or = 0, run the loop. i is 200, and will run down by 25 until it's zero. Once zero, the statement is false and will stop
//     //console.log(i);
//  //}
// //console.log('After the loop!');
 
// //Lesson 67 Infinite Loops - Write a loop where the ending is never met or always true
// // DO NOT RUN CODE BELOW
// //for (let o = 1; o !== 20; o+=2){
//     //console.log(o);
// //} < -- this is an example of an infinite loop. 20 is never met
// //for (let i = 100; i >= 0; i--);

// // lesson 68 - For loops & arrays
// // to loop over an array, start at 0 and continue to the last index (length - 1)
// //const ExamScores = [100, 98, 77, 84, 69, 81];
// //for (let i = 0; i<= ExamScores.length; i++) {
//    // console.log(i, ExamScores[i]);
// //}

// const myStudents = [
//     {
//         firstName : 'Zeus',
//         grade : 97
//     }, 
//     {
//         firstName : 'Artemis',
//         grade : 86
//     },
//     {
//         firstName : 'Ares',
//         grade: 77
//     }, 
//     {
//         firstName: 'Hera',
//         grade: 98
//     }
// ];

// // for (let i = 0; i < myStudents.length; i++) {
// //     let student = myStudents[i];
// //     console.log(`${student.firstName} scored ${student.grade}`);
// //     //console.log(`${}`)
// let total = 0;

// for (let i = 0; i < myStudents.length; i++) {
// let student = myStudents[i];
// total += student.grade;
// }
// console.log(`The testing average was ${total / myStudents.length}!`);

// const myListings = [
//     {
//         house : 'Willowbend',
//         price : '$420,000'
//     },
//     {
//         house : 'McClearen',
//         price : '$660,000'
//     },
//     {
//         house : 'Wigton',
//         price : '$540,000'
//     }
// ];

// for (let l = 0; l < myListings.length; l++) {
//     let listings = myListings[l];
//     console.log(`The home on ${listings.house} cost ${listings.price}!`);
// }

// for (let i = 1; i <=10; i++) {
//     console.log('Outer Loop:', i); 
//     for (let j = 10; j >= 0; j -= 2) {
//         console.log('   Inner Loop', j);
//     }
// };

// const gameBoard = [
// [ 4, 32, 8, 4 ],
// [ 64, 8, 32, 2 ],
// [ 8, 32, 16, 4 ],
// [ 2, 8, 4, 2 ]
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//         //console.log(row);
//     for (let j = 0; j < row.length; j++) {
//        //console.log(row[j]);
//        totalScore += row[j];
//     }
// }



// Lesson 70 - While Loops - continue to run as long as it's condition is true

// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j <= 5) {
//      console.log(j);
//      j++;
// }

//while loops continued - Lesson 71
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(guess !== target){
//     console.log(`Target: ${target}, Guess: ${guess} `)
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target}, Guess: ${guess} `);
// console.log(`Congrats! You win!`);

// while (some condition)
// in loop, update or attempt to make that condition false



// Lesson 72 - Break - Use inside loops to break out of loops and stop it's execution

// for(let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i===5) {
//         break;
//     }
// }



// for...of Intro - Lesson 73
//  for variable of iterable {
    //statement
//}

// let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
// for (let i = 0; i <subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }


// below is how to ideally use " for of loops "
// const magicSquare = [
//     [ 2, 7, 6 ],
//     [ 9, 5, 1 ],
//     [ 4, 3, 8 ]
// ];


// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for ( let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//         sum += row[j];
//     }
// console.log(`${row} summed to ${sum}`);    
//}
// for (let row of magicSquare) {
//     let sum = 0;
//     for (let num of row) {
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// don't use for of when below. Below is better
// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i<words1.length; i++){
// console.log(words1[i], words2[i]);
// }


// Lesso 75 - For... Of with Objects. Objects are not iterable, so don't work with for of loops
// const movieReviews = {
//     arrival                : 9.5,
//     Alien                  : 9,
//     Amelia                 : 8,
//     'In Bruges'            : 9,
//     Amadeus                : 10,
//     'Kill Bill'            : 8,
//     'Little Miss Sunshine' : 8.5,
//     Caroline               : 7.5
// };

// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//     total += r;
// }
// let avg = total /= ratings.length;
// console.log(avg);

// // returns: arrival 9.5
// app.js:732 Alien 9
// app.js:732 Amelia 8
// app.js:732 In Bruges 9
// app.js:732 Amadeus 10
// app.js:732 Kill Bill 8
// app.js:732 Little Miss Sunshine 8.5
// app.js:732 Caroline 7.5
// app.js:741 8.6875


// Lesson 76 - For in loops - For variables IN an object. This iterates over the actual values in a statement
// for of wants an iterable (array) for in wants an object {}
// const jeapardyWinnings = {
//     regularPlay             : 2522700,
//     watsonChallenge         : 300000,
//     tournamentOfChampions   : 500000,
//     battleOfTheDecades      : 100000
// };

// let total = 0;
// for (let prop in jeapardyWinnings) {
//     console.log(prop);
//     console.log(jeapardyWinnings[prop]);
//     total += jeapardyWinnings[prop];
// }

// // when looping in arrays, the keys return properties, 0, 1, 2, 3. Should not use this way
// console.log(`Ken Jennings Total Earnings: $${total}`);
// for(let k in [88, 99, 77, 66]) {
//     console.log(k);
// }




/// Section 8, Functions: Must understand to be a JS developer
// a function is a reusable feature that we can refer back to 
// two step process
// 1. Define Function - Layout how it works. 
// 2. Execute, or Run the function

//  Define 
//  function funcName() {
//  do something
//  } 

// function grumpus() {
//     console.log('Ugh...');
//     console.log('WTF!?');
//     console.log('Shut up bro...');
// }
// // run grumpus with ()
// grumpus();
// grumpus();
// grumpus();

// for (let i = 0; i < 10; i++) {
//     grumpus();
// }

// Lesson 78 

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice(numRolls) {
//     for (let i = 0; i < numRolls ; i++) {
//         rollDie();
//     }
// }

// // Lesson 79 - Arguements - functions that accept inputs

// // function greet() {
// //     console.log('Hi');
// // }

// function greet(nickname) {
//    console.log(`Hello, ${nickname}!`);
// }


// Lessom 80, functions with multiple arguments

// function square(num) {
// console.log(num * num);
// }

// function sum(x, y) {
//     console.log(x + y);
// }

// function divide(a, b){
//     console.log(a/b);
// }
// in this case the order is very important. The order that we define parameter dictacts the order they are filled in console.

// Lesson 81 - Return Statement
// const scream = `Hello`.toUpperCase();
// function add(x, y) {
//     return `The sum of the numbers is ${x + y}`;
// }

// Lesson 82 - Multple Return Values
//The return function ends execution - nothing will run after

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//    return color.toLowerCase() === 'purple'; 
// }

// function containsPurple(arr) {
//     for (let color of arr) {
//         if (color === 'purple' || color === 'magenta') {
//     return true;
//     }
// }
// return false
// }

// Lesson 83, PASSWORD VALIDATOR PROJECT
// write a isValidPassword Function
// It accepts 2 arguments: password & username
// Password must:
// - Be at least 8 char
// - contain no spaces
// - can't contain username
// if all requirements are met, return true. Otherwise: false
// isValidPassword('89Fjjlnms', 'dogluvr'); // true
// isValidPassword('dogluvr123!', 'dogluvr'); // false


// -1 indicates that you can't have one at all
// function isValidPassword(password, username) {
//     if (
//         password.length < 8 || 
//         password.indexOf(' ') !== -1 || 
//         password.indexOf(username) !== -1
//         ) {
//         return false;
//     }
//         return true;
//     }



// LESSON 84 - AVARAGE PROJECT
// write a function to find the average value in an array of numbers
// avg{[0, 50]} // 25
// avg([75, 76, 80, 95, 100]) // 85.2

// function avg(arr) {
// let total = 0;
// //loop over each num
// for (let num of arr){
// //add them together
//     total += num;
// }
//  //divide by # of nums
//  let res = total / arr.length;
//  return res;
// }




// Lesson 85 - Projects - Pangrams - A sentence with every letter in the alphabet, each letter can be used more than once
// write a function, isPangram, which checks to see if a given sentence contains every letter of the alphabet/ Make sure you ignore string casing! 

// isPangram('the five boxing wizards jump quickly')

// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (lowerCased.indexOf(char) === -1) {
//         return false;
//         }
//     }
//     return true;
// }

// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!lowerCased.includes(char)) {
//         return false;
//         }
//     }
//     return true;
// }




// Lesson 86 - Get Playing Card
// write a getCard() function which returns a random playing card object, like:
// { 
//     value: 'K'
//     suit: 'clubs'
// }

// pick a random value from:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Pick a random suit from:
// clubs, spades, hearts, diamonds
// return both in an object


// function pick(arr) {
//     //return random element from arr
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }


// function getCard() {
   
// const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'] ;
// const value = pick(values);

// const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
// const suit = pick(suits);
// return  `You pulled the ${value} of ${suit}!`
// }

function lottery(arr) {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

function winningNum() {
    const nums = [1, 2, 3, 4, 5];
    const winner = lottery(nums);

    const earnings = ['$100 Gift Card', '$1000 Shopping Spree', 'All Expenses Paid Vacation', 'New Car', 'New House']; 
    const winnings = lottery(earnings);
    return `Congratulations, lucky number ${winner}! You have won a ${winnings}!!!`
}




// Section 9 - Scope
// Variability - "Visibility"
// The location where a variable is defined dictates where we have access to that variable


// below, you can call the functions for 
// function lol() {
//     const person = 'Tom';
//     let age = 1;
//     var animal = 'dog';
//     console.log(age)
// }
// function changeColor() {
//     let color = 'purple';
//     const age = 19;
//     console.log(age);
// }
//     lol();
//     changeColor();


// These below will show as not defined since they are not in the function. they do not exist
// lol();


// this code will run the nearest key
// let jedi = 'Anakin Skywalker';

// function jediMaster() {
//     let jedi = 'Yoda';
//     console.log(jedi);
// }

// jediMaster();
// console.log(jedi);

// where jedi is scoped to jediMaster (yoda)
// jedi, outside of the function looks for nearest key



// Lesson 88 - Block Scope
// Block Scope - is within curly braces

// if(true) {
//     let animal = 'eel';
//     console.log(animal);
//     //var animal = 'eel';
//     // var will still log outside of scope since it works through different rules, which is why let & const proposed
    
// }
// // this one does not run

// function doubleArr(arr) {
//     const results = []; 
//     for (let num of arr) {
//         let double = num * 2;
//         // var double = num * 2; will work since it does not cease to exist outside of function
//         results.push(double);
//     }
//     return results;
// }

//Lesson 89 - Lexical Scope - nest in function, that those functions only have access to/


// function outer() {
//     let hero = 'Black Panther';

//     // no hero defined, but it's looking for it in the outer function of itself
//     function inner() {
//         // looks to nearest scope and uses that value. If below is uncommented, it would call 'Tchalla'
//         //let hero = 'Tchalla';
        
//         function sidekick() {
//             console.log(hero.toUpperCase())
//         }
//         sidekick();
//     }
//     inner();
    
// }

// example 2: grouping all functions into one, but breaking it out into smaller pieces where you can still access variables in outer function
// function todoList() {
//     let todo = [];
//     let username = '';
//     function addTodo() {

//     }
//     function removeTodo() {

//     }
// }



// Lesson 90 - Function Expression - Another way to define a function
// the function is stored in a variable, but does not have a name
// const square = function (num) {
// return num*num;
// }
// console.log(square(7));
// Another syntex to find a function
// function add(x, y) {
//     return x + y;
// }
// console.log(add(5, 7))

// const sum = function (x, y) {
//     return x + y;
// }
// console.log(sum(5, 7));

// // you can add a name for a function in a variable so it doesn't have to be anonymous 

// const product = function multiply(x, y) {
//     return x * y;
// }
// // log the variable.. not as useful since you can't call the function
// console.log(product(5, 5));



// Lesson 91 - Higher order functions - Creating METHODS

//adding these functions to an array
// function add(x, y) {
//     return x + y;
// }

// const subtract = function(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const divide = function(x, y) {
//     return x / y;
// }

// // Array for functions above
// const operations = [add, subtract, multiply, divide];
// // loop over array and call functions
// // this loop will run all funbctions of the operation
// for (let func of operations) {
// let result = func(100, 5);
// console.log(result);
// }
// // store function as value in object
// // adding a function to an object creates a method, like toUpperCase();
// const thing = {
//     doSomething: multiply
// }

// Lesson 92 - Higher order functions - Functions that accept other functions as arguments and or return a function
// below is my main function
// function callThreeTimes() {
//     repeat();
//     repeat();
//     repeat();
// }
// // call this in the console with function (callThreeTimes) for 3 inputs
// function laugh() {
//     console.log(`hahaha`)
// }
// // Call this into callThreeTimes function for 3 inputs
// function cry() {
//     console.log(`Boohooo!`)
// }
// // this function creates a loop of numbers for the above
// function repeatNTimes(func, num) {
//     for (let i = 0; i < num; i++){
//         func();
//     }
// }

// // repeatNTimes(laugh, 13);
// // repeatNTimes(cry, 13);

// function pickOne(f1, f2) {
//     let rand = Math.random();
//     if (rand < 0.5) {
//         f1();
//     } else {
//         f2();
//     }
// }



// Lesson 93 - Functions as return values
// Returning Functions

// const triple = multiplyBy(3);
// triple(5); //15

// const double = multiplyBy(2);
// double(8); // 16


// function multiplyBy(num) {
//     return function(x) {
//         return x * num;
//     }
// }

// const halve = multiplyBy(0.5);
// const double = multiplyBy(2);
// const triple = multiplyBy(3);
// const quadruple = multiplyBy(4);
// const quintuple = multiplyBy(5);
// it takes existing function and creates a seperate function that manipulates the function to result in a different value

//const isChild = makeBetweenFunc(0, 18);
// function makeBetweenFunc(x, y){
//     return function(num) {
//         return num >= x && num <= y ; // returns booleans
//     }
// }
// Returns true or false statements
// const isChild = makeBetweenFunc(0, 18); 
// const isInNineties = makeBetweenFunc(1990, 1999);
// const isNiceWeather = makeBetweenFunc(60, 80);

// const isChild = function (num) {
//     return num >= 0 && num <= 18;
// }

// function greenGrass(x) {
//     return function (green) {
//         return green === x; // Boolean - Returns true
//             return `green`;
//     }
// }

// const healthyGrassColor = greenGrass();

// function ifGrassGreen(x) {
// return function (color) {
//     return color === x;
//     }
// }

// const isGrassHealthy = ifGrassGreen('green'); 

// Lesson 94 - Callback functions - Functions passed into another function as an argument, which is then invoked inside the outer function
// ! Very Importante

// funcion funcName() {
// alert("")    
// }
// setTimeout(funcName, 5000) sets a specific time for activation

// function clockAlert() {
//     alert(`Time is running out...`)
// }

// setTimeout(clockAlert, 5000); // a Method, with a function and miliseconds passed in

// or you can poss an anonymous function into another function
// setTimeout(function(){
//     alert(`Hurry`);
// }, 3000);

// html button: need to select button in js
// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     alert(`Why did you click me?`)
// })




// Lesson 95, Hoisting - Not crucial
// function declarations are hoisted because they are global. functions are processed first. Has to be a function on it's own. Can't be called as an expression




// Section 10 - Apply Functions to Collections of Data
// Array Callback Methods
// Arrays come with many built-in methods that accept callback functions
// Mehtods - forEach, map, filter, find, reduce, some, every

// forEach - accepts a function and calls it on every element per array
// const multiplesOf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// multiplesOf.forEach(function (m) {
//     console.log(m * m)
// });

// const typesOfPokemon = ['water', 'grass', 'fire', 'normal', 'ghost', 'fighting', 'flying', 'psychic', 'fairy', 'dark', 'steel', 'ground', 'electric', 'dragon', 'bug', 'poison'];
// // // for each calls each indivisual element of the types of Pokemon until it hits the end of the array.
// // typesOfPokemon.forEach(function(type){
// // console.log('Ghost'.toUpperCase() + ' ' + type.toUpperCase())
// // });

// // you can add a separate parameter to callback if you want to use an indec
// typesOfPokemon.forEach(function(type, idx) {
//     console.log(idx, type);
// }) // returns each element with the respective index


// const pokemonGames = [{
//     title: 'Yellow, Red, & Blue Version' , 
//     system: 'Gameboy Color',
//     rating: 10,
// },
// {
//     title: 'Pokemon Stadium 1, 2, & 3' , 
//     system: 'Nintendo 64',
//     rating: 8,
// }, 
// {
//     title: 'Pokemon Ruby & Sapphire' , 
//     system: 'Gameboy Advance SP',
//     rating: 9,
// },
// {
//     title: 'Pokemon X & Y' , 
//     system: 'Nintendo DS',
//     rating: 9.5,
// },
// {
//     title: 'Pokemon Scarlet & Violet' , 
//     system: 'Nintendo Switch',
//     rating: 8.5,
// }
// ];

// // forEach is older JS
// pokemonGames.forEach(function(games) {
//     console.log(games.title.toUpperCase())
// }) 
// // This is the new way - For of is a new JS call
// for (let games of pokemonGames) {
//     console.log(games.title.toUpperCase())
// }



// Lesson 98 - Map - Extremely Common - Creates a new array with the results of calling a callback on every element in the Array.
//Does not alter original array, instead it updates them to a new array

// const favoriteAnime = ['Attack on Titan', 'My Hero Acadamia', 'Naruto', 'Demon Slayer', 'Hunter x Hunter', 'Dragonball Z'];

// const streamingPlatforms = ['Hulu', 'Youtube', 'Netflix', 'HBO', 'Amazon', 'Disney Plus'];

// const bestAnime =favoriteAnime.map(function(anime){
//     return anime;
// })



// Lesson 99 - Arrow Functions - Syntactically compact alternative to regular function expression. A better way of defining function expressions
// Ex: 
// const square = (x) => {
//     return x * x ;
// }

// const sum = (x, y) => {
//     return x + y;
// }


//ex without arrow function
// const square = function(x) {
//     return x * x;
// }
// with arrow function... works exactly the same
// const square = (x) => {
// return x * x;
// }

// const isEven = (num) => {
//     return num % 2 === 0;
// }

// const multiply = (x, y) => {
//     return x * y;
// }

// note, parenthesis are optional when you only have one parameter
// const isOdd = num => {
//     return num % 2 !== 0;
// }

// if you have zero parameters you need parenthesis to confirm function
// const greet = () => {
//     //return 'Hello World!';
//     console.log(`Hello!`)
// }



// Lesson 100 - Arrow Functions: Implicit Returns - means you don't have to write return keyword itself
// const square = n => {
//     return n * n;
// }

//needs Parenthesis with more than one parameter to make it more clear
// const square = n => ( n * n )
//Single-Line
// const square = n => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Ex 1
// const doubles1 = nums.map(function(n) {
//     return n * 2;
// })

// // ex 2
// const doubles2 = nums.map(n => n * 2);

//simple
// const parityList = nums.map((n) => ( n % 2 === 0 ? 'even' : 'odd'));
// simpler
// const parityList = nums.map((n) => n % 2 === 0 ? 'Even' : 'Odd');




// Lesson 101 - Array.find = returns the value of the first element in the array that satisfies the provided testing function

// let movies = [
//     `Harry Potter & the Sorcerer Stone`,
//     `Harry Potter & the Chamber of Secrets`,
//     `Harry Potter & the Prisoner of Azkaban`,
//     `Harry Potter & the Goblet of Fire`,
//     `Harry Potter & the Order of the Phoenix`,
//     `Harry Potter & the Half-Blood Prince`,
//     `Harry Potter & the Deathly Hallows`
// ]

//  const movie = movies.find(movie => {
//     return movie.includes('of');
// })
// const movie2 = movies.find(m => m.indexOf(`Prisoner`) === 0)
// only finds the first movie or element, then stops. 



// const pokemonGames = [{
//     title: 'Yellow, Red, & Blue Version' , 
//     system: 'Gameboy Color',
//     rating: 10,
// },
// {
//     title: 'Pokemon Stadium 1, 2, & 3' , 
//     system: 'Nintendo 64',
//     rating: 8,
// }, 
// {
//     title: 'Pokemon Ruby & Sapphire' , 
//     system: 'Gameboy Advance SP',
//     rating: 9,
// },
// {
//     title: 'Pokemon X & Y' , 
//     system: 'Nintendo DS',
//     rating: 9.5,
// },
// {
//     title: 'Pokemon Scarlet & Violet' , 
//     system: 'Nintendo Switch',
//     rating: 8.5,
// }
// ]

// const pokemonGame = pokemonGames.find(p => p.rating === 8.5)
// const nintendoSwitch = pokemonGames.find(p => p.system.includes('Nintendo Switch'))
// / Returns Pokemon Scarlet & Violet
// The function above is good for finding certain things. Let's say deleting a post with an ID of 1 or 2... You can identify certain items, however, it only gives us the first match.



// Lesson 102 - Filter - Creates a new array with all elements that pass test implemented by the provided function

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n=> n > 50);


// const pokemonGames = [
// {
//     title: 'Yellow, Red, & Blue Version' , 
//     system: 'Gameboy Color',
//     rating: 10,
// },
// {
//     title: 'Pokemon Stadium 1, 2, & 3' , 
//     system: 'Nintendo 64',
//     rating: 8,
// }, 
// {
//     title: 'Pokemon Ruby & Sapphire' , 
//     system: 'Gameboy Advance SP',
//     rating: 9,
// },
// {
//     title: 'Pokemon X & Y' , 
//     system: 'Nintendo DS',
//     rating: 9.5,
// },
// {
//     title: 'Pokemon Scarlet & Violet' , 
//     system: 'Nintendo Switch',
//     rating: 8.5,
// }
// ]

// const bestPokemonGames = pokemonGames.filter( x => x.rating >= 9.5);
// const nintendoSwitch = pokemonGames.filter(PokemonGames => PokemonGames.system.includes('Switch') )

// const worstPokemonGames = pokemonGames.filter( x => x.rating <= 8.5);

// const allPokemonGames = pokemonGames.filter(games => (
//     games.title.includes('Pokemon') || 
//     games.title.includes('Yellow')
//     ))

//     // F I L T E R - This is a great way to filter elements. Returns true or false if true, then element is added to filtered results
//     const query = 'Red';
//     const results = pokemonGames.filter(game => {
//         const title= game.title.toLowerCase();
//         return title.includes(query.toLocaleLowerCase())
//     })

//     // Every/Some example
//     const highRating = pokemonGames.every(game => game.rating >= 8.5);
//     //returns false, because they all are not greater than 8.5;'




// // Lesson 103 - Every - tests whether all elements in the array pass the provided function. It returns a Boolean Value.


// const rhymes = ['stack', 'track', 'black', 'slack', 'track'];

// const fiveLetters = rhymes.every(rhyme => rhyme.length === 5);

// const endWithK = rhymes.every(rhyme => {
//     const last = rhyme.length - 1;
//     return rhyme[last] === 'k'
// })


// // Some - Similar to Every, but returns true if ANY of the array elements pass the test


//     const someStartWithS = rhymes.some(rhyme => rhyme[0] === 's');const EveryStartWithS = rhymes.every(rhyme => rhyme[0] === 's');



// Lesson 104 - Revisiting Sort - 
// Sort Part 2: arr.sort(compareFunc(a,b))

// const prices = [45, 44, 33, 52, 99];
// prices.sort(); /* don't sort this way */

// const sortAscending = prices.slice().sort((a, b) => a - b);
// // // returns least to greatest = 33, 44, 45, 52, 99
// // - if CompareFunc(a,b) returns less < 0, sort a before b

// const sortDescending = prices.slice().sort((a, b) => b - a); 
// //returns greatest to least [99, 52, 45, 44, 33]
// // If compareFunc(a,b) returns greater than 0, sort b before a


// - if CompareFunc(a,b) returns less < 0, sort a before b
// - If compareFunc(a,b) returns 0, leave a and b unchanged with respect to each other
// - If compareFunc(a,b) returns 0, leave a and b unchanged with respect to each other

// const pokemonGames = [
// {
//     title: 'Yellow, Red, & Blue Version' , 
//     system: 'Gameboy Color',
//     rating: 10,
// },
// {
//     title: 'Pokemon Stadium 1, 2, & 3' , 
//     system: 'Nintendo 64',
//     rating: 8,
// }, 
// {
//     title: 'Pokemon Ruby & Sapphire' , 
//     system: 'Gameboy Advance SP',
//     rating: 9,
// },
// {
//     title: 'Pokemon X & Y' , 
//     system: 'Nintendo DS',
//     rating: 9.5,
// },
// {
//     title: 'Pokemon Scarlet & Violet' , 
//     system: 'Nintendo Switch',
//     rating: 8.5,
// }
// ]

// const lowToHigh = pokemonGames.sort((a, b) => a.rating - b.rating) /* This rates from lowest to highest */

//const highToLow = pokemonGames.sort((a, b) => b.rating - a.rating) /* This rates from highest to lowest */




// Lesson 105 - Reduce - Takes an array of values and reduces them down to a single value. 
// Example, summing data, or finding the maximum value

// const nums = [3, 4, 5, 6, 7];
// const product = nums.reduce((total, currentVal) => {
//     return total * currentVal;
// })



// Reduce can also find the M A X I M U M value of an array
// Reduce starts with the fitst value and compares it to the next until it finds the value that beats it based on the rule. If the value is beaten, then it is replaced by that value that beat it, so forth
// const grades = [79, 98, 99, 84, 74, 92, 89, 82];
// // const maxGrade = grades.reduce((max, currVal) => {
// //     if (currVal > max) return currVal;
// //     return max;
// // });

// const maxGrade = grades.reduce((max, currVal) => {
//     return Math.max(max, currVal)
// });

// // can be written a little simpler since it's one value.
// const minGrade = grades.reduce((min, currVal) => (
//     Math.min(min, currVal)
// ));



// const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//     return sum + currVal;
// }, 1000); /* <= you can add an initial value here*/
// // this returns 1150

// const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// // const results = votes.reduce((tally, val) => {
// // if (tally[val]) {
// //     tally[val]++
// // } else {
// //     tally[val] = 1;
// // } 
// // return tally
// // },{})

// const results = votes.reduce((tally, val) => {
//     tally[val] = (tally[val] || 0) + 1;
//     return tally;
// }, {});

// const pokemonGames = [
// {
//     title: 'Yellow, Red, & Blue Version' , 
//     system: 'Gameboy Color',
//     rating: 10,
// },
// {
//     title: 'Pokemon Stadium 1, 2, & 3' , 
//     system: 'Nintendo 64',
//     rating: 8,
// }, 
// {
//     title: 'Pokemon Ruby & Sapphire' , 
//     system: 'Gameboy Advance SP',
//     rating: 9,
// },
// {
//     title: 'Pokemon X & Y' , 
//     system: 'Nintendo DS',
//     rating: 9.5,
// },
// {
//     title: 'Pokemon Scarlet & Violet' , 
//     system: 'Nintendo Switch',
//     rating: 8.5,
// }
// ]

// const groupedByRatings = pokemonGames.reduce((groupedGames, game) => {
//     const key = Math.floor(game.rating);
//     if (!groupedGames[key]) groupedGames[key] = [];
//     groupedGames[key].push(game)
//     return groupedGames;
// }, {})




// Section 11 - Lesson 108-109 - NEW JS FEATURES
// rest & spread, default parameters, and destructing

// Default function parameters - 
// function multiply(x, y) {
//     if (typeof y === 'undefined') {
//         y = 1;
//     }
//     return x * y;
// }

// x = value and y = value, but if no number is passed in, then y = 1.
// function multiply(x, y = 1) {
//     return x * y;
// }


// Order does matter in default parameters. default parameters come at the end.
// const greet = (person, greeting = 'Hi', punctuation = '!') => {
// console.log(`${greeting}, ${person}${punctuation}`)
// }

// const blah = (x, y = [1, 2, 3]) => {
//     console.log(x, y)
// }


// Lesson 110 - Spread for function calls
// Spread syntax allows an iterable such as an array to be expanded in place where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected

// Spread expands iterables into another place. Spread is always 3 dots
// Expand iterables in to a list of arguments
// 1. Spread for function calls

// in console:
// Math.max(3, 4, 5)
// returns 5
// Math.min(3, 4, 5)
// returns 3

// to get it to show in a variable, use a spread:
// const nums = [3, 4, 5]
// Math.max(...nums)
// returns 5

// function giveMeFour(a, b, c, d) {
//     console.log('a', a)
//     console.log('b', b)
//     console.log('c', c)
//     console.log('d', d)
// }

// const colors = ['black', 'silver', 'gold', 'platinum']
// console.log(giveMeFour(...colors))
// // returns black, silver, gold, platinum

// const str = 'GOAT';
// console.log(giveMeFour(...str))


// Lesson 111 - S P R E A D - Array Literals
// // fav pokemon
// const electricPokemon = ['Pikachu', 'Jolteon', 'Ampharos'];

// const ghostPokemon = ['Gengar', 'Dragapult', 'Ceruledge'];

// const DragonPokemon = ['Dragonite', 'Goodra', 'Garchomp'];

// const teamOne = [...electricPokemon, ...ghostPokemon] /* we can also add additional arrays*/
// // returns: ['Pikachu', 'Jolteon', 'Ampharos', 'Gengar', 'Dragapult', 'Ceruledge']
// const allPokemon = [...electricPokemon, ...ghostPokemon, ...DragonPokemon]
// // returns all of the pokemon

// // most common uses of spread is to make a copy of an array

// [...'abcdefg']
// // returns the strings spread outwith a space in between

// // or, you can add another array at teh end
// ['abc', 'Hello!']
// returns strings with hello


// Lesson 112 - Spread object Literals - Copies properties from one object into another destination object

// const dragonite = {
//     move1: 'Dragon Rush',
//     move2: 'Earthquake'
// };

// const charizard = {
//     move1: 'Flamethrower',
//     move2: 'Dragon Pulse',
//     move3: 'Fly',
//     Move4: 'Earthquake'
// };

// const dragoniteMoves = {
//     ...dragonite,
//     move3: 'Extreme Speed',
//     move4: 'Thunder Punch',
//     move5: 'Dragon Dance'
// }

// const charizardMoves = {
//     ...charizard,
//     move5: 'Solar Beam',
//     move6: 'Dragon Dance'
// }

// const bothMoves = {
//     ...dragoniteMoves,
//     ...charizardMoves
// }

// const random = [... 'hello', {...charizard}]




// Lesson 113 - The Arguments Object (not new)
// Rest - Looks like spread but it's not. same ... as spread 
// rest collects things into a single array - used when you want to accept a variable number of arguments


// Arguments don't work in this
// function sum(){ /* this function "sum" does not have any arguments */
// const argsArr = [...arguments]
// return argsArr.reduce((total, currVal) => {
//     return total + currVal
// })
// }

// function fullName(firstName, lastName,) {
//     console.log(arguments);
// }



// Lesson 114 - Rest Params
// function sum(...nums){ /* the 3 dots combine all of the arrays into one number*/
//     return nums.reduce((total, currVal) => {
//         return total + currVal
//     })
// }

// function fullName(first, last, ...titles){ /* this is collecting the unclaimed titles that remain*/
//     console.log('first', first)
//     console.log('last', last)
//     console.log('titles', titles)
// }


// const multiply = (...nums) => ( /* this is a way to collect every argument & multiply */
//     nums.reduce((total, currVal) => total * currVal)
// )




// Lesson 115 - Destructuring Arrays - A short clean syntax to "unpack" : 
// Values from arrays
// Properties from objects into distinct variables

// const rankedTeam = [
//     'Rotem',
//     'Charizard',
//     'Ceruledge',
//     'Dragonite',
//     'Garchomp',
//     'Aegislash'
// ];

// // const pickOne = rankedTeam[4]
// // const pickTwo = rankedTeam[5]
// // const pickThree = rankedTeam[0]

// // const [pickOne, pickTwo, pickThree] = rankedTeam;
// // would return the rankedTeam in order of array...

// //specific result explanation below
// // const [pickOne,, pickTwo,, pickThree] = rankedTeam;
// // The commas before the named array skips one per comma. this statement returns Rotem, Ceruledge, Garchomp.

// const [pickOne, ...others] = rankedTeam
// // returns rotem as one, and others as everyone else




// Lesson 116 - Destructuring Objects into standalone variables 
// destructuring objects
// const goku = {
//     name:       'Goku',
//     nickname:   'Kakarot',
//     height:     `5'-9"`,
//     race:       'Saiyan',
//     sigMove:    'Kamehameha!',
//     home:       'Earth'

// }
// variables must be existing key names
// const {name, race, sigMove} = goku;

// const {
//     home: planet, 
//     nickname: altName 
// } = goku;

// const {name, nickname, ...other} = goku;



// Lesson 117 - Nested Destructuring

// const saiyans = [{
//     name:       'Goku',
//     nickname:   'Kakarot',
//     height:     `5'-9"`,
//     race:       'Saiyan',
//     sigMove:    'Kamehameha!',
//     home:       'Earth'
// },
// {
//     name:       'Vegita',
//     nickname:   'Prince Vegita',
//     height:     `5'-3"`,
//     race:       'Saiyan',
//     sigMove:    'Final Flash!',
//     home:       'Earth'
// },
// {
//     name:       'Gohan',
//     nickname:   'Prodigy',
//     height:     `5'-9"`,
//     race:       'Saiyan',
//     sigMove:    'Kamehameha!',
//     home:       'Earth'
// }
// ]
// // you can nest this but it gets complicated as you can see
// const [{name: mainName}, {nickname}] = saiyans;



//Lesson 118 - Destructuring Parameters 
// const saiyan = {
//     name:       'Goku',
//     nickname:   'Kakarot',
//     height:     `5'-9"`,
//     race:       'Saiyan',
//     sigMove:    'Kamehameha!',
//     home:       'Earth'
// }

// // function print(saiyan) {
// //     const {
// //         name, 
// //         race, 
// //         home
// //     } = saiyan;
// //     console.log(`I choose ${name}, the ${race} from ${home} to defend Universe 7!`)
// // }

// // ORRRR this is it destructured:

// function print({
//     name, 
//     race, 
//     home
// }) {
//     console.log(`I choose ${name}, the ${race} from ${home} to defend Universe 7!`)
// }


// const response = [
//     'HTTP/1.1',
//     '200 OK',
//     'application/json'
// ]

// function parseResponse([protocol, statusCode, contentType]){
// console.log(`Status: ${statusCode}`)
// }




// Section 12: Methods & 'This'

// Syntax example
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// const stats = getStats(reviews);

// Shorthand Syntax Example: 

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max,
//         min,
//         sum,
//         avg
//     }
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// const stats = getStats(reviews);




// Lesson 120 - Computed Properties - We can use a variable as a key name in an object literal property
// const role = 'Character';
// const person = 'Tony Stark';
// const role2 = 'Actor'
// const person2 = 'Robert Downey Jr.'

// // const team = {};
// // team[role] = person;
// // team[role2] = person2;

// const team = {
// [role]: person,
// [role2]: person2
// }

// // function addProp(obj, k, v) {
// // const copy = {...obj};
// // copy[k] = v;
// // return copy;
// // }

// // One Line of Syntax above:
// const addProp = (obj, k, v) => {
//     return {
//         ...obj,
//         [k]: v
//     }
// }

// const res = addProp(team, 'Movie', 'Iron Man')
// returns in console: {Character: 'Tony Stark', Actor: 'Robert Downey Jr.', Movie: 'Iron Man'}Actor: "Robert Downey Jr."Character: "Tony Stark"Movie: "Iron Man"[[Prototype]]: Object




// Lesson 121 - Adding Methods to Objects - Adding functions into properties - V E R Y , U S E F U L !

// const add = function(x,y) {
// return x + y
// }

// adding functions to properties of an object is called a method
// const math = {
//     numbers: [1, 2, 3, 4, 5],
//     add: function(x, y){
//         return x + y;
//     },
//     multiply: function(x, y){
//         return x * y;
//     },
//     divide: function(x, y){
//         return x / y;
//     },
//     subtract: function(x, y){
//         return x - y;
//     }
// }
// numbers isn't linked to any function, however the array can be called with math.numbers




// Lesson 122 - Method Shorthand Syntax
// const auth = {
//     username: 'iKsmith',
//     login() {
//         console.log(`Logged You In!`)
//     },
//     logout() {
//         console.log(`Goodbye!`)
//     }
// }




// Lesson 123 - The keyword This
// window is the global scope of a browser
// window.whatever will still pull the same as that method without window. it's automatically there
// let and const aren't added to global scope. Var is.

// function sayHi(){
//     console.log(`Hi!`)
//     console.log(this);
// }

// // this is a reference to an object. If notm it prints the window
// const greet = function() {
//     console.log(this);
// }

// Lesson 124 - Using 'This' in Methods
// const trainer = {
//     first: 'Ash',
//     last: 'Ketchum',
//     town: 'Pallet Town',
//     pokemonTrainer() {
//         const {
//             first, 
//             last, 
//             town
//         } = this;
//         // without the above syntax, the console should log as:
//         // console.log(`I'm ${this.first} ${this.last}, from ${this.town}!`);
//         return(`My name is ${first} ${last}, from ${town}`);
//     },
//     printBio() {
//         const pokemonTrainer = this.pokemonTrainer();
//         console.log(`${pokemonTrainer}, and my dream is to become a Pokemon Master!`)
//     }
// }
// returns: trainer.printBio()
// My name is Ash Ketchum, from Pallet Town, and my dream is to become a Pokemon Master!

// objects can interact with properties, values, and other methods



// Lesson 125 - This: Invocation Context

// const trainer = {
//     first: 'Ash',
//     last: 'Ketchum',
//     town: 'Pallet Town',
//     pokemonTrainer() {
//         const {
//             first, 
//             last, 
//             town
//         } = this;
//         // without the above syntax, the console should log as:
//         // console.log(`I'm ${this.first} ${this.last}, from ${this.town}!`);
//         return(`My name is ${first} ${last}, from ${town}`);
//     },
//     printBio() {
//         const pokemonTrainer = this.pokemonTrainer();
//         console.log(`${pokemonTrainer}, and my dream is to become a Pokemon Master!`)
//     },  
//     // below, the arrow function does not reference the object. As you can see, the method need access to the parent function to pull the name.  don't use arrow functions as methods in objects
//     starter: () => {
//         console.log(this);
//         console.log(`${this.first} chose Pikachu as his starter, due to arriving late at the lab.`)
//     }
// }

// This depends on the invocation function that it is used in



// Lesson 126 - Annoyomatic Demo - Runs code every 5 seconds
// Why don't arrow functions get their own 'This'?

// const ash = {
//     pokemon: ['Pikachu', 
//     'Charmander', 
//     'Squirtle', 
//     'Bulbasaur', 
//     'Pidgey', 
//     'Butterfree'], 
//     pickPokemon() {
//         const {pokemon} = this;
//         const idx = Math.floor(Math.random() * pokemon.length);
//         return pokemon[idx]
//     }, 
//     start() {
//         /*using an arrow function will pull from the parent function instead of creating its own new 'this"*/ 
//         this.timerID = setInterval(() => {
//             console.log(`${this.pickPokemon()}, I choose you!`)
//         }, 3000)
//     },
//     stop() {
//         clearInterval(this.timerID);
//         console.log(`Great fight! now return to your poke'ball!`)
//     }
// }
    





// Lesson 127 - Putting it all together: Deck of cards


// function makeDeck() {
// //     const deck = [];
// //     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
// //     const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A';
// //     for (let value of values.split(',')) {
// //         for (let suit of suits) {
// //             deck.push({
// //                 value, 
// //                 suit
// //             })
// //         }
// //     }
// //     return deck;
// // }

// // function drawCard(deck) {
// // deck.pop()
// // }

// // // const myDeck = makeDeck();
// // // const card1 = drawCard(myDeck);

// // const myDeck = {
// //     deck: [],
// //     drawnCards: [],
// //     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
// //     values: '1,2,3,4,5,6,7,8,9,10,J,Q,K,A',
// //     startDeck(){
// //         const {suits, values, deck} = this;
// //         for (let value of values.split(',')) {
// //             for (let suit of suits) {
// //                 deck.push({
// //                     value, 
// //                     suit
// //                 })
// //             }
// //         }
// //         // return deck;
// //     },
// //     drawCard() {
// //         const card = this.deck.pop()
// //         this.drawnCards.push(card);
// //         return card;
// //     },
// //     drawMultiple(numCards) {
// //         const cards = [];
// //         for (let i = 0; i < numCards; i++) {
// //             cards.push(this.drawCard());
// //         }
// //         return cards;
    
// // },
// // shuffle() {
// //     const {
// //         deck
// //     } = this;
// //     // loop over array backwards
// //     for (let i = deck.length - 1; i > 0; i--) {
// //         // pick random index before current element
// //         let j = Math.floor(Math.random() * (i + 1));
// //         // swap
// //         [deck[i], deck[j]] = [deck[j], deck[i]];
// //     }
// //   }
// // }

// const makeDeck = () => {
//     return {
//         deck: [],
//     drawnCards: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//     values: '1,2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     startDeck(){
//         const {suits, values, deck} = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits) {
//                 deck.push({
//                     value, 
//                     suit
//                 })
//             }
//         }
//         // return deck;
//     },
//     drawCard() {
//         const card = this.deck.pop()
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple(numCards) {
//         const cards = [];
//         for (let i = 0; i < numCards; i++) {
//             cards.push(this.drawCard());
//         }
//         return cards;
    
// },
// shuffle() {
//     const {
//         deck
//     } = this;
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//         // pick random index before current element
//         let j = Math.floor(Math.random() * (i + 1));
//         // swap
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   }
//     }
// }

// // Clean version
// const myDeck = makeDeck();
// myDeck.startDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);




// The DOM - Document Object Model
// console.dir(document) in console to see all of the documents references
// They all start with document.doSomething




// Lesson 137 - Query Selector - A newer, all-in-one method to select a SINGLE element. Pass in a CSS Selector


// Section 14 - Twisting the DOM to our will
// Working with innerText & textContent
// Properties & Methods - innterText - textContent





// Lesson 143 - Changing Multiple Elements
// const allLis = document.querySelectorAll('li');
// // for (let i = 0; i < allLis.length; i++){
// //    allLis[i].innerText = 'May the odds be ever in your favor'
// // }

// for (let li of allLis) {
//     li.innerHTML = 'Use <b>this coding cheatsheet</b> for your success'
// }



// Lesson 144 - Altering Styles

// code below creates multiple colors for the list in order
// const allLis = document.querySelectorAll('Li');
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })





// Lesson 146 - Manipulating classes

const todo = document.querySelector('#todos .todo')

//ClassList create a class and use ClassList Method

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo,style.opacity = '50%';



// Lesson 147 - Creating Elements: 
//Creating Elements and adding them to the DOM
// Create an element with const name = 


//img url: https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80';
newImg.style.width = '200px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video! Click Me';
newLink.href ='https://www.youtube.com/watch?v=QQNL83fhWJU'

const firstP = document.querySelector('p');
firstP.appendChild(newLink)

//Lesson 148 - Append, Prepend, & insertBefore
const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I am a new li';
parentUL.appendChild(newLI);
const firstLI = document.querySelector('li.todo')
// This is how to insert at top of element instead of bottom
parentUL.insertBefore(newLI, firstLI)

// to insert elsewherem use the index [#] and create new const, Ex: lastLI

const i = document.createElement('i');
i.innerText = 'I Am Italics!!!';
const firstP2 = document.querySelector('p');
//You have to remember strings for below
// beforebegin, afterend, afterbegin, beforeEnd
firstP2.insertAdjacentElement('beforebegin', i);
// use below for above statements
//append() - Goes to end 
// prepend() - goes to beginning
//ex
// newLI
    //<li>I am a new LI<li>
    //firstP.append(i, newLI)
    //firstP.prepend(i, newLI) 


    // Lesson 149 - removeChild & remove
// when there is a parent, use the removeChild to remove child elements
    const ul = document.querySelector('section ul');
    const removeMe = ul.querySelector('.special');
    const deleted = ul.removeChild(removeMe);

    const h1 = document.querySelector('h1');

    //no child so we can remove the parent with remove by itself
    h1.remove();




    // Section 15 - Communicating with Events
    // Lesson 152 - intro to DOM events
// we listen for a thing, or when a thing occurs, then the event type, then when the code runs.
// The thing            event type          the code to run
// button               click               change the color
// input                hits return         get search results
// image                mouseover           display the image caption

// multiple ways to use syntax for events

//You don't want to right code like this either.
// const btn = document.querySelector('#clicker');
// btn.onclick = function() {
//     console.log('You clicked me!');
// }

// btn.ondblclick = function() {
//     console.log('You double clicked!')
// }

// events are all lowercase
// this is how you want to use event syntax
const btn = document.querySelector('#clickMe');

btn.addEventListener('click', function () {
    alert('Clicked!');
});

btn.addEventListener('click', function () {
    console.log('Second Thing!');
});

btn.addEventListener('mouseover', function() {
    btn.innerText = 'Stop Touching Me!';
});

btn.addEventListener('mouseout', function() {
    btn.innerText = 'You Clicked Me!';
});

//window.addEventListener('scroll', function(){
    //console.log('Stop Scrolling');
//});

const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
alert('Submitted the form')
})