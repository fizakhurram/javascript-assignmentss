// __________chap 35-38________________
// ___________q no1______________
// function currentdateandtime(){
//     console.log(new Date());
// }
// currentdateandtime();

// // ____________q no 2___________
// function username(firstname , lastname){
//     document.write("thank you so much " + firstname + lastname );
// }
// var userfirstname = prompt("Enter your first name.")
// var userlastname = prompt("Enter your last name.")
// username(userfirstname , userlastname);

// // ____________q no 3____________
// function numbers(firstnum ,secondnum){
//     console.log(firstnum + secondnum)
// }
// var num1 = Number(prompt("Enter the first num for plus"))
// var num2 = Number(prompt("Enter the second num for plus"))
// numbers(num1 , num2);

// // ___________q no 4____________
// function calculator(num1 , num2 , operator){
//     if(operator ==="+"){
//         console.log(num1 + num2);
//     }
//     else if(operator === "-"){
//         console.log(num1 - num2 )
//     }
//     else if(operator === "/"){
//         console.log(num1 / num2)
//     }
//     else if(operator === "*"){
//         console.log(num1 * num2)
//     }else{console.log("Invalid operator")}
// }
// var usernum_1 = Number(prompt("Enter the num1"));
// var usernum_2 = Number(prompt("Enter the num2"));
// var useroperator = prompt("Enter the operator");
// calculator(usernum_1 , usernum_2 , useroperator);

// // ____________q no 5____________
// // Write a function that squares its argument.
// function square(num){
//     // return num**2
//     return num * num ;
// }
// console.log(square(-5)); //25
// console.log(square(9)); //81

// ____________q no 6__________
// Write a function that computes factorial of a number.
// var result = 1;
// function factorial (n){
//     for(i=1 ; i<=n ; i++){
//         result*=i;
//     }
//     return result;
// }
// var factorialnum = Number(prompt("Enter the num for factorial."))
// // console.log(factorial(factorialnum));
// // if we want to show alert than,,
// var answer = factorial(factorialnum);
// alert("the factorial of " + factorialnum + " is " + "" + answer);

// _____________q no 7__________
function userchoice(start, end) {
    document.write("Conting from " + start + " to " + end + "<br>")
    for (i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}

var startval = Number(prompt("Enter the num for starting of counting."));
var endval = Number(prompt("Enter the ending number of counting you want"));
userchoice(startval, endval);