// __________________chapter 14 to 16_______________________________________________

// ____Qno1______________________
// Declare an empty array using JS literal notation to store
// student names in future.
// var studentnames=[];

// // ____Qno2_____________________
// // Declare an empty array using JS object notation to store
// // student names in future.
// var studentnames= newArray()
// // _____Qno3______________
// // Declare and initialize a srings array
// var fruits=["Apple", "Mango","Banana","orage","Grapes"]
// // Declare and initialize a number array
// var numbers=[1,2,3,4,5]
// // Declare and initialize a boolean array.
// var boolean=[true,false]
// // Declare and initialize a mixed array.
// var mixedarray=["ali", 25 ,true,"student"]
// Qno7___________________
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var arr  =[
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M.phill",
    "PhD"
]
document.write("Qualifications:" + "<br>")
document.write("1)"+arr[0]+"<br>")
document.write("2)"+arr[1]+"<br>")
document.write("3)"+arr[2]+"<br>")
document.write("4)"+arr[3]+"<br>")
document.write("5)"+arr[4]+"<br>")
document.write("6)"+arr[5]+"<br>")
document.write("7)"+arr[6]+"<br>")
document.write("8)"+arr[7]+"<br>")
// _________Qno8_____________________
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentnames=[
    "Michael",
    "John",
    "Tony"
]
var marks=[
    320,
    230,
    480
]
document.write("Score of "+studentnames[0]+" is "+marks[0]+". Percentage: "+ marks[0]/500*100+" % <br>")
document.write("Score of "+studentnames[2]+" is "+marks[1]+". Percentage: "+ marks[1]/500*100+" % <br>")
document.write("Score of "+studentnames[2]+" is "+marks[2]+". Percentage: "+ marks[2]/500*100+" % <br>")
// ____________Qno9___________________
// Initialize an array with color names. Display the array
// elements in your browser.
var colornames=[
    "Red",
    "Yellow",
    "Blue",
    "Orange"
]
// document.write(colornames +"<br>")
// // -----q9a-----
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// var addbegcolor=prompt("Enter the color you want to add at the beginning,,")
// colornames.unshift(addbegcolor);
// document.write(colornames+ "<br>");
// // -----qno9b-----
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// var addendcolor=prompt("Enter the color you wants to add at the end,,")
// colornames.push(addendcolor);
// document.write(colornames+ "<br>");
// // ----qno9c-----
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// colornames.unshift("grey","maroon")
// document.write(colornames+"<br>");
// //-----qno9d-----
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// colornames.shift("grey");
// document.write(colornames +"<br>");
// ----qno9e----
// e. Delete the last color in the array. Display the updated
// array in your browser.
// colornames.pop(colornames);
// document.write(colornames +"<br>");
// // ----qno9f----
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// var replaceindex= +prompt("Enter the index number you want to add at more colors,,")
// var replacecolor= prompt("Enter the color names,,")
// colornames.splice(replaceindex,0,replacecolor);
// document.write(colornames+"<br>");
// -----qno9g----
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var indexofdel= +prompt("Enter the index number you want to delete");
// var numofdel = +prompt("Enter the number of deletations,,")
// colornames.splice(indexofdel,numofdel);
// document.write(colornames);


// __________Qno10___________
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var scores=[
    320,230,480,120
]
document.write("Scores of students : " + scores + "<br>")
document.write("Ordered scores of students : " + scores.sort() + "<br>")
// ye is trhan hojayga lekin agr data complicated hua tw bydefault ye string smjhega or result theek nahi ayga is problem ka solution notes me likha hai
// ====Entra working bby self study======

// --for asscending order----
 scores.sort(function(a, b) {
      return a - b //neg means chota pehle ayga
    });
document.write(scores+ "<br>")
// --for descending-------
scores.sort(function(a,b) {
    return b-a ; //positive means bara pehle ayga
});
document.write(scores + "<br>")

// __________Qno11____________
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities= ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Citie list: " + cities + "<br>");
var selectedcities=cities.slice(2,4)
document.write("Selected cities list: " + selectedcities);

// __________Qno12_____________
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
console.log(arr.join(" "))

// ___________Qno13_______________
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var fifo=[]
// add the variables by push for first in
fifo.push("Keyboard","Mouse","Printer","Monitor")
// remove the variables by shift for first out
console.log(fifo)
fifo.shift()
console.log(fifo)//keyboard remove
fifo.shift()
console.log(fifo)//mouse remove
fifo.shift()
console.log(fifo)//printer remove
fifo.shift()
console.log(fifo)//monitor remove

// ____________Qno14___________________
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var lifo=[]
// add the variables by push for first in
lifo.push("Keyboard","Mouse","Printer","Monitor")
// remove the variables by shift for first out
console.log(lifo)
lifo.pop()
console.log(lifo)//monitor remove
lifo.pop()
console.log(lifo)//printer remove
lifo.pop()
console.log(lifo)//mouse remove
lifo.shift()
console.log(lifo)//keyboard remove

// ___________Qno15_______________
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var manufacturers=["Samsung", "Motrola", "Nokia","Sony", "Haier"];
document.write("<select>");
document.write("<option>" + manufacturers[0] + "<option>");
document.write("<option>" + manufacturers[1] + "<option>");
document.write("<option>" + manufacturers[2] + "<option>");
document.write("<option>" + manufacturers[3] + "<option>");
document.write("<option>" + manufacturers[4] + "<option>");
document.write("<select>")
