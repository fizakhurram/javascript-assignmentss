// ____________chapter 21 to 25______________
// __________question num 1__________
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstname = prompt("Enter your first name..")
// var lastname = prompt("Enter your last name..")
// var fullname = (firstname + lastname).toUpperCase()
// alert("THANK YOU SO MUCH " + fullname)

// // _____________question num 2______________
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userfavmob = prompt("Enter your favourite mobile phone...")
// var mobilelength= userfavmob.length 
// document.write("My favourite phone is: " + userfavmob + "<br>");
// document.write("length of string is: " + mobilelength );

// ______________question num 3______________
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var nationality = "Pakistani";
var index = nationality.indexOf("n")
// console.log(index);
document.write("string: " + nationality + "<br>")
document.write("Index of 'n': " + index + "<br>");

// ___________question num 4___________
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var any = "Hello world";
var index = any.lastIndexOf("l");
document.write("string: " + any + "<br>");
document.write("index of last 'l': " + index + "<br>");

// if we want to find the middle l letter index So,
var str = "hello world"
var first_l = str.indexOf("l");
var last_l = str.lastIndexOf("l");
var midlle_l = str.indexOf("l" , first_l + 1);
console.log("index of middle l; " +midlle_l);

// /____________question num 5____________
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var str = "Pakistani";
document.write("sring: " + str + "<br>");
document.write("charcter at index '3' ; "+ str.charAt(3));

// _____________question num 6 ______________
// using concat() method...

var firstname = 

