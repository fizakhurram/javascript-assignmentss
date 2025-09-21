// chapyter 9 to 11 _______________________________________

// Qno1________________________

// var city = prompt("Enter your city name?")
// if(city==="karachi"){
//     alert("Welcome to the city of light")
// }

// Qno2____________________________

// var gender = prompt("Enter your gender?")
// if(gender==="male"){
//     alert("Good Morning sir")
// }
// if(gender==="female"){
//     alert("Good morning madam")
// }else{
//     alert( "sorry!!!! invalid gender")
// }

// //  Qno3__________________

// var trafficsignal=prompt("what color of traffic light you see?")
// if(trafficsignal=== "red"){
//     console.log(
//         "Must Stop"
//     )
// }
// if (trafficsignal=== "Yellow"){
//     console.log("Ready to move")
// }
// if(trafficsignal=== "green"){
//     console.log(
//         "Move Now"
//     )
// }

//  Qno4_________________

// var remfuel = +prompt("Enter Current fuel (In Liters)?")
// if(remfuel < 0.25){
//     alert("Please refill the fuel in your car")
// }else(
//     alert("You have enough fuel")
// )

//  Qno5____________________

// var a = 4
// if(++a===5){
//     alert("given condition for variable a is true");
// }

// WHAT I LEARN....actually in this part the condition is pre increment thatswhy the condition is true and browser shows the alert
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// in this part browsewr shows nothing because the condition is post increment and in post increment the value gain in next call not in first so thats why..
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// in this part we create variable c and given the value=12 and then the first condition is post increment so it is not equal to 13 in first call and then in second condition the browser shows the alert because the value of c is changes in fist condition from 12 to 13 so the next call in this time...and in third condition as we know that the value of c is now 13 and in this the condition is preincrement so value is gain in first call so c=14 and in this the condition is less than 14 so no alert is show the fourthone is right b/c of the c=14

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// In this we create variables material and labour cost 20000 and 200 and than create variable totalcost equals to matcost + labour cost and than put the condition if total cost===material and labour cost so, alerts shows...
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if (true) → the condition is always true, so the block runs.
// 👉 It will show an alert box with the message "True".

// if (false) → the condition is always false, so this block will never run.
// 👉 No alert with "False" will appear.
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// if("car" > "cat"){
//     alert("car is greater than cat");
// }
// In this we gave the condition car > cat so the alerts shows...if we changes the sign in condition to greater than ">" so alerts not come
// in this code car and car like c c is equals a a is equals but the r is smaaler than t by the unicode value unicode of r is 114 and t is 116 so the first condition is true and alerts shows...

// unicodeof A to Z is 65 to 90
// unicode of a to z is 97 to 122
// example...
console.log("A".charCodeAt(0));  // 65
console.log("a".charCodeAt(0));  // 97
console.log("r".charCodeAt(0));  // 114
console.log("t".charCodeAt(0));  // 116

// Qno6______________________

// var totalmarks= "300"
// var engmarks= +prompt("Enter your marks of english..")
// var urdumarks= +prompt("Enter your marks of urdu..")
// var mathsmarks= +prompt("Enter your marks of maths..")
// var marksobtained= engmarks + urdumarks + engmarks
// var percentage= marksobtained/totalmarks * 100
// if(percentage >= 80){
//     document.write("<h1>MARKSHEET<h1>" +"<br>")
//     document.write("TOTAL MARKS: " + totalmarks +"<br>")
//     document.write("OBTAINED MARKS: " + marksobtained +"<br>")
//     document.write("PERCENTAGE: " + percentage + "%"+ "<br>")
//     document.write("GRADE: " + "AONE" +"<br>")
//     document.write("REMARKS:" + "BRAVO..YOUR RESULT IS EXCELLENT")
// }
// else if(percentage >= 70){
//     document.write("<h1>MARKSHEET<h1>" + "<br>")
//     document.write("TOTAL MARKS: " + totalmarks + "<br>")
//     document.write("OBTAINED MARKS: " + marksobtained + "<br>")
//     document.write("PERCENTAGE: " + percentage + "%" + "<br>")
//     document.write("GRADE: " + "A" + "<br>")
//     document.write("REMARKS: " + "BRAVO..YOUR RESULT IS GOOD")
// }
// else if(percentage >= 60){
//     document.write("<h1>MARKSHEET<h1>")
//     document.write("TOTAL MARKS: " + totalmarks + "<br>")
//     document.write("OBTAINED MARKS: " + marksobtained + "<br>")
//     document.write("PERCENTAGE: " + percentage + "%"+ "<br>")
//     document.write("GRADE: " + "B" + "<br>")
//     document.write("REMARKS: " + "YOU NEED TO IMPROVE")
// }
// else{
//     document.write("<h1>MARKSHEET<h1>")
//     document.write("TOTAL MARKS: " + totalmarks + "<br>")
//     document.write("OBTAINED MARKS: " + marksobtained + "<br>")
//     document.write("PERCENTAGE: " + percentage + "%"+ "<br>")
//     document.write("GRADE: " + "FAIL" + "<br>")
//     document.write("REMARKS: " + "SORRY")
// }

// Qno7_____________________

// var usernum= +prompt("Guess the number from 1to 10")
// var secretnum= 6
// if(usernum===secretnum){
//     alert("BINGO! Correct Answer")
// }
// if(usernum===5){
//     alert("Close enough to the correct answer")
// }else{
//     alert("try again")
// }
// Qno8_____________________

// var usernum= +prompt("Enter the number which is divisible by 3")
// var divisible= usernum / 3
// if(usernum % 3===0){
//     alert( divisible +" Congratulations...you are correct")
// }else{alert("oopss...try again :)")}

// //  Qno9__________________-
// var usernum = +prompt("Enter any number?")
// if(usernum % 2 === 0){
//     alert("THIS IS THE EVEN NUMBER")
// }else{alert("THIS IS THE ODD NUMBER")}

// Qno10_________________________
// var temperature = +prompt("tell your city's temperature in degree..")
// if(temperature > 40){
//     alert("It is too hot out side")
// }
// else if(temperature >30){
//     alert("The weather today is normal")
// }
// else if(temperature > 20){
//     alert("Today's weather is cool")
// }else if(temperature >10){
//     alert("OMG! Today's weather is so cool..")
// }else{alert("Invalid temperature")}

// Qno11__________________________


// var num1 = +prompt("Enter the fist number..")
// var num2 = +prompt("Enter the second number..")
// var operation= prompt("Enter any one operation from (+ , - , x , / , % )")
// if(operation=== "+"){
//     result= num1 + num2
//     document.write(num1 + " +" + num2 + " = " + result )
// }
// else if(operation=== "-"){
//     result= num1 - num2
//     document.write(num1 + " -" + num2 + " = " + result )
// }
// else if(operation=== "x"){
//     result= num1 * num2
//     document.write(num1 + " x" + num2 + " = " + result )
// }
// else if(operation=== "/"){
//     if(num2 !== 0){
//     result= num1 / num2
//     document.write(num1 + " /" + num2 + " = " + result )}else{
//         document.write("Error...Divisible by 0 is not allowed")
//     }
// }
// else if(operation=== "%"){
//     if(num2 !== 0){
//     result= num1 % num2
//     document.write(num1 + " %" + num2 + " = " + result )}else{
//         document.write("Error...modulus by 0 is not allowed")
//     }
// }else(
//     alert("Invalid operation! Please enter the valid operation.")
// )
// // note... IN MODULUS>>If the first num is smaller than the second so the ans is always first num..










