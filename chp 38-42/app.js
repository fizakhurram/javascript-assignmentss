// ___________chp 38 to 42_________
 
// ________________q no 1_____________________
// function power(a,b){
//     return a**b;
// }
// var valofa = Number(prompt("Enter t6he value of a.."));
// var valofb = Number(prompt("Enter the value of b.."));
// console.log(power(valofa , valofb));

// _____________q no 2_____________________
// function leapyaer(year){
//     if(year % 400 === 0||year% 4 === 0 && year%100 !== 0){
//         alert("leap year");
//     }else{
//         alert("not leap year");
//     }
// }
// var useryear = Number(prompt("Enter the leap year.."));
// console.log(leapyaer(useryear));

// 4 se divisible AND 100 se divisible nahi → Leap Year

// 100 se divisible BUT 400 se divisible nahi → Not Leap Year

// 400 se divisible → Leap Year

// _______________q no 3___________________

function semiparameter(a,b,c){
    return (a+b+c)/2;// 3 sides is parameter / by 2 semiparameter
}
function area(a,b,c){
    let S = semiparameter(a,b,c);
    let area = Math.sqrt(S*(S-a)*(S-b)*(S-c));//for calculate area of the triangle
    return area;
}
var a= Number(prompt("Enter the val of a"));
var b= Number(prompt("Enter the val of b"));
var c= Number(prompt("Enter the val of c"));
alert(area(a,b,c));
