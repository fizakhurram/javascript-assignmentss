// Chapter 6 to 9____________________________________________________________

// ___________Qno1_____________________


// var a = 10
// console.log("The value of a is : " + a)
// ++a
// console.log("++a "+ "Now the value of a is: " + a)
// a++
// console.log("a++ "+ "Now the value of a is: " + a)
// --a
// console.log("--a "+"Now the value of a is: " + a)
// a--
// console.log("a-- "+"Now the value of a is: " + a)

// ___________Qno2_________________________

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// console.log(result)
// the value of a is 2 so,
// --a means // 1 (now the value of a is 1)
// the value of b is 1
// --b means // 0 (now the value of b is 0)
// so, 
// in first statement ,
// --a - --b = 1-0 = 1

// the value of b is 0
// ++b means (now the value of b is 1)
// --a - --b + ++b = 1 - 0 + 1 = 2
// b-- means (the value of b is 0 but post means show in next call)
// So, 
// --a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3
// a= 1
// b = 0_______(the value of b is 0 remember....)
// result =3
//_________________Qno3 or 4_______________________________

// var username = prompt("Enter your name..")
// alert("Thankyou for your response "+ username)

// ___________________Qno5___________________________________

// var usernum = +prompt("Enter the number for multiplication") || "5"
// document.write(
//     "<h1>TABLE OF " + usernum + "<br>" +
//     usernum + "x" + "1" + "=" + (usernum * 1) + "<br>" +
//     usernum + "x" + "2" + "=" + (usernum * 2) + "<br>" +
//     usernum + "x" + "3" + "=" + (usernum * 3) + "<br>" +
//     usernum + "x" + "4" + "=" + (usernum * 4) + "<br>" +
//     usernum + "x" + "5" + "=" + (usernum * 5) + "<br>" +
//     usernum + "x" + "6" + "=" + (usernum * 6) + "<br>" +
//     usernum + "x" + "7" + "=" + (usernum * 7) + "<br>" +
//     usernum + "x" + "8" + "=" + (usernum * 8) + "<br>" +
//     usernum + "x" + "9" + "=" + (usernum * 9) + "<br>" +
//     usernum + "x" + "10" + "=" + (usernum * 10) + "<br>"
// )

// ____________________Qno6_______________________________________


// var studentname = prompt("Enter your full name in block letters..")
// var english= +prompt("Enter your marks in english (0ut of 100)")
// var percentageofeng= (english/100)*100
// var urdu = +prompt("Enter your marks in urdu (Out of 100)")
// var percentageofurdu= (urdu/100)*100
// var maths = +prompt("Enter your marks in maths (Out of 100)")
// var percentageofmaths= (maths/100)*100
// var totalmarks = english + urdu + maths
// var totalpercentage = (totalmarks/300)*100

// if(totalpercentage >=90){grade="AOne"}
// else if(totalpercentage >=80){grade="A"}
// else if(totalpercentage >=70){grade="B"}
// else if(totalpercentage >=60){grade="C"}
// else if(totalpercentage >=50){grade="D"}
// else{grade= "fail"}

// document.write("<table>")
// document.write("<tr><th colspan = '3'>Marksheet Of " + studentname + "<th/><tr/>")
// document.write("<tr><th>Subjects<th><th>Total Marks<th><th>Obtaines Marks<th/><th>Percentage<th/><tr/>")
// document.write("<tr><th>English<th/><th>100<th/><td>" + english + "<td/><td>" + percentageofeng.toFixed(2)  + "%<td/><tr/>")
// document.write("<tr><th>Urdu<th/><th>100<th/><td>" + urdu + "<td/><td>" + percentageofurdu.toFixed(2) + "%<td/><tr/>")
// document.write("<tr><th>Maths<th/><th>100<th/><td>" + maths + "<td/><td>" + percentageofmaths.toFixed(2)  + "%<td/><tr/>")
// document.write("<tr><td colspan='3'><b>Percentage:<b/>" + totalpercentage.toFixed(2) + "%<td/><tr/>")
// document.write("<tr><td colspan='3'><b>Grade:<b/>" + grade + "<td/><tr/>")
// document.write("<table/>")
let char = prompt("Enter a character:");  // user se input lo


// chatgpt study...
// // char ka Unicode/ASCII code nikalna
// let code = char.charCodeAt(0);

// console.log("You entered:", char);
// console.log("Unicode / ASCII code:", code);

// // check kis category me aata hai
// if (code >= 48 && code <= 57) {
//     console.log("This is a Number.");
// }
// else if (code >= 65 && code <= 90) {
//     console.log("This is an Uppercase English Letter.");
// }
// else if (code >= 97 && code <= 122) {
//     console.log("This is a Lowercase English Letter.");
// }
// else {
//     console.log("This is some other Unicode character (maybe Urdu, Emoji, Chinese, etc).");
// }
