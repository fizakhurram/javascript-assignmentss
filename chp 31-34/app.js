// _________chapter 31 to 34_________

// ______q no 1________
// Write a program that displays current date and time in
// your browser.

// console.log(new Date());
// _______q no 2_______
// Write Wa program that alerts the current month in words.
// For example December.

var currentmonth = new Date().getMonth();
// console.log(currentmonth);
var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
for(i=0 ; i<=months.length ; i++){
    if(i === currentmonth){
        alert("current month: " + months[i])
    }
};
// _________q no 3__________
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var currentday = new Date().getDay();
var days =["sun", "mon", "tue", "wed" , "thurs" , "fri" , "sat" ];// in this always sun is on 0 index remember
for(i=0 ; i<=days.length ; i++){
    if(i === currentday){
        alert("Today is " + days[i])
    }
};
// ________q no 4_______
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var days =["sun", "mon", "tue", "wed" , "thurs" , "fri" , "sat" ];
// in this both methods can be use with arr or without arr 
var day = new Date().getDay();
if(days=== 0 || days===6){// 0 means sunday and 6 means saturday
    alert("It's a Fun day");
}else{
    alert("It's not a Fun Day");
};

// _______q no 5__________
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var currentdate= new Date();
// console.log(currentdate);
if(currentdate<15){
    alert("First fifteen days of the month");
}else{
    alert("Last fifteen days of the month");
};
// __________q no 6_________
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
var currentdate= new Date();
var millisecondsfrom1970 = Date.now();
// console.log(millisecondsfrom1970);
var minutesfrom1970 = (millisecondsfrom1970 /(1000*60)).toFixed(2)//millisec to sec = /1000 ,, sec to minutes *60
// console.log(minutesfrom1970);
document.write("Current Date: " + currentdate + "<br>" );
document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsfrom1970 + "<br>" );
document.write("Elapsed minutes since january 1,1970: " + minutesfrom1970 + "<br>");

// _______________q no 7_____________
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var currenttime = new Date().getHours();//get hour starts from 0 to 23 0 means raat k 12
console.log(currenttime);
if(currenttime<12){
    alert("It's Am");
}else{
    alert("Its Pm");
}
