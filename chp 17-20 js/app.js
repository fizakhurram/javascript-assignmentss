// ____________________chapter 17 to 19______________________________________

// _____________qno1________

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var matrix = [
//     //index numbers 0 to 3
//     [0, 1, 2, 3],// matrix 0
//     [1, 0, 1, 2],// matrix 1
//     [2, 1, 0, 1]// matrix 2
// ]
// ______________qno2_________

// Declare and initialize a multidimensional array
// representing the following matrix:

// without loop-----
// matrix 0 ka index 0 matrix 0 ka index 1 and so on...
// document.write(matrix[0][0], matrix[0][1], matrix[0][2], matrix[0][3] + "<br>")
// document.write(matrix[1][0], matrix[1][1], matrix[1][2], matrix[1][3] + "<br>")
// document.write(matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][3] + "<br>")

// //  with loop------
// for (var i = 0; i < matrix.length; i++) {
//     document.write(matrix[i][0], matrix[i][1], matrix[i][2], matrix[i][3] + "<br>")
// }
// loop me hum ne dekha k hum ne just ek br code likha wo is trhn k humein pehle i ki value br br likhni pr rhi thi lkn loop me hum ne just i likh kr col ka bta dia tw us ne 3 br chla dia humari length k hisab se..

// _____________qno3______________
// Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     document.write( i + "<br>")
// }

// ____________qno4____________
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var usernum = +prompt("Enter the number for multiplicatiion..")
// var tablelength = +prompt("Enter the length of the table")
// document.write("Multiplication of table of " + usernum + "<br>")
// document.write("Length : " + tablelength + "<br>")
// for (i = 1; i <= tablelength; i++) {
//     document.write(usernum + " x " + [i] + " = " + (usernum * i) + "<br>")
// }

// ____________qno5____________
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits=[ "apple" , "banana", "mango", "orange", "strawberry"]
// for(i=0 ; i<fruits.length ; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<hr>")
// for(i=0 ; i<fruits.length ; i++){
//      document.write("Element at " + "index " + [i] + " is " + fruits[i] + "<br>")
// }

// _________qno6________________
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a_______
document.write("Counting 1 to 15" + "<br>")
for(let i=1 ; i<=15 ; i++){
    if(i<15){
        document.write(i + " , ")
    }else{document.write(i)}
}
document.write("<br>" , "<br>")
// b_______
document.write("Reverse counting 10 to 1" + "<br>")
for(let i=10 ; i>=1; i--){
    if(i>1){
        document.write(i + ",")
    }else{document.write(i)}
}
document.write("<br>" + "<br>")
// c_______
document.write("Even numbers 0 to 20 " +"<br>")
for(i=0; i<=20; i += 2){
    if(i<20){
        document.write(i + " ,")
    }else{
        document.write(i)
    }
}
document.write("<br>" + "<br>")
// d___________
document.write("Odd numbers 1 to 19" + "<br>")
for(i=1 ; i<20 ; i += 2){
    if(i<18){
        document.write(i + " ,")
    }else{
        document.write(i)
    }
}
document.write("<br>" + "<br>")
// e______________
document.write("Series 2k to 20k" + "<br>")
for(i=2 ; i<=20 ; i += 2){
    if(i<20){
        document.write(i + "k" + " ,")
    }else{
        document.write(i + "k" + "<br>")
    }
}
// __________qno7_______________
var items=[
    "cake",
    "apple pie",
    "cookie",
    "chips",
    "patties"
]
// var useritem= prompt("Welcome to ABC Bakery..what you want to order sir/mam?")
// matchfound=false;
// for(i=0 ; i<items.length ; i++){
//     if(useritem===items[i]){
//         matchfound=true;
//         console.log(useritem + " is available at index " + [i] + " in our bakery."  )
//     }
// }
// if(!matchfound){
//     console.log("We are sorry." + useritem + " is not available in our bakery")
// }

// ___________qno8____________
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var numbers=[24, 53, 78, 91, 12, 80 , 89];
var largest= numbers[0]
for(i=0 ; i<numbers.length ; i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}
console.log("The largest number is "+ largest);

// ___________qno9__________
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var numbers=[24, 53 ,78 , 91 , 12 ]
var smallest= numbers[0]
for(i=0 ; i<numbers.length ; i++){
    if(numbers[i]<smallest){
        smallest= numbers[i];
    }
}
console.log("The smallest number is " + smallest);
// ___________qno10_____________
// write a program to print multiples of 5 ranging 1 to 100
// for(i=5 ; i<=100 ; i += 5){
//     if(i<100){
//         document.write(i + " ,")
//     }else{
//         document.write(i)
//     }
// }
// var numbers = [24, 53, 78, 91, 12, 80 , 89];
// var largest = Math.max(...numbers);

// console.log(largest); // 91

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     alert(i + j);
//   }
// } 
// 0 1 2 1 2 3 2 3 4
var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;
for (var i = 0; i < animals.length; i++) {
  for (var j = 0; j < products.length; j++) {
    foodItems[k] = animals[i] + products[j];
    k++;
  }
}
console.log(foodItems)
console.log(k)//9
