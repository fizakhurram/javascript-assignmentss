// ____________________chapter 12-13________________________________


// ___________Qno1_______________
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var char = prompt("Enter something...")
// var code = char.charCodeAt(0)

// console.log("You entered",char)
// console.log("Unicode /ASCII codes: " ,code);

// if(code >=48 && code <=57){
//     console.log("This is a number")
// }
// else if(code >=65 && code <=90){
//     console.log("The character is Uppercase")
// }
// else if(code >=97 && code <=122){
//     console.log("This is a lowercase letters")
// }else{console.log("This is some other unicodes or ASCII codes like emojies , chinese , arabic , urdu etc")}

// ____________Qno2____________________
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1=+prompt("Enter the first number..")
// var num2=+prompt("Enter the second number..")
// if(num1>num2){
//     console.log("The first number is larger..")
// }
// else if(num2>num1){
//     console.log("The second number is larger..")
// }else{console.log("both numbers are equal")}

// __________Qno3____________________
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num=+prompt("Enter the number")
// if(num>0){
//     console.log("The given number is positive")
// }
// else if(num<0){
//     console.log("The given number is negative")
// }else{
//     console.log("The given number is zero..")
// }

// ________________Qno4_____________
//  Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter any one vowel..").toLowerCase()

// if (char.length === 1) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         console.log(true)
//     } else { console.log(false) }
// } else { console.log("Enter only one character..") }`

// __________________Qno5__________________
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctpassword = "fiza123"
// var userpassword= prompt("Enter your password..")
// if(!userpassword){
//     console.log("Please enter your password!!!")
// }
// else if(userpassword===correctpassword){
//     console.log("Correct! The password you entered matches the original password.")
// }else{console.log("Incorrect Password..")}

// __________________Qno6_______________
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greetings;
// var hour= 14;
// if(hour<18){
//     greetings="Good Evening"
// }else{
//     greetings="Good Morning"
// }
// console.log(greetings)

// solution= In this question we declare variable and declare and initialize variable hour and gave the condition that if the hour is less than 18 than initialize the variable greetings to good evening or in else initialize the greetings to good morning than console greetings

// var time = +prompt("Enter the time in hours (like 1900 for 7pm)");
// if(time >=0 && time <1200 ){
//     console.log("Good Morning!")
// }
// else if(time>=1200 && time <1700){
//     console.log("Good Afternoon!")
// }
// else if(time >=1700 && time<2100){
//     console.log("Good Evening!")
// }
// else if(time>=2100 && time<=2359){
//     console.log("Good night!")
// }else{
//     console.log("Invalid time!")
// }