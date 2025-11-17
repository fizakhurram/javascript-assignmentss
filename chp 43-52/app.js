// ______________ Q no 1_____________
// var fName = document.getElementById('fName');
// var lName = document.getElementById('LName');
// var email = document.getElementById('email');
// var password = document.getElementById('password');

// function ShowData(){
//     alert( "Revise your Data:" + "\n" + "fName: " + fName.value + "\n" + "lName: " +lName.value + "\n" + "email: "+ email.value +"\n" + "password: "  + password.value )
//     fName.value = "";
//     lName.value = "";
//     email.value = "";
//     password.value = "";
// }

// _________________Q no 2_____________
var paragraph = document.getElementById('para');
var button = document.getElementById('visible');
function Visible(){
    var shortpara= "Saylani Mass IT Training is at the forefront of technical education, providing cutting-edge training in a range of programming skills,";
    var para = "Saylani Mass IT Training is at the forefront of technical education, providing cutting-edge training in a range of programming skills, including Web and Mobile Application Development, CCNA, Graphics Designing, and Computer Based Accounting."
    if(button.innerHTML=== "See more"){
        button.innerHTML = "See less";
        paragraph.innerHTML = para;
    }else{
        button.innerHTML = "See more"
        paragraph.innerHTML = shortpara;
    }
}

// _______________Q no 3_____________

function Deleterow(rowId){
    var row = document.getElementById(rowId);
    row.remove()
}
let currentEdit = null;

// Delete row
function deleteRow(button){
//    var row = document.getElementById(rowId);
  row.remove();
}

// Edit row
function editRow(button){
    document.getElementById('hidden-form').style.display="block";
  currentEdit = row;
//  row = document.getElementById(rowId);
  document.getElementById('name').value = row.cells[0].innerText;
  document.getElementById('id').value = row.cells[1].innerText;
  document.getElementById('class').value = row.cells[2].innerText;
  document.getElementById('grade').value = row.cells[3].innerText;
  document.getElementById('contact').value = row.cells[4].innerText;
}

var studentform = document.getElementById('myform');

studentform.onsubmit = function(e){
    e.preventDefault(); // page reload stop

    // row ke values update karo
    currentEdit.cells[0].innerText = document.getElementById('name').value;
    currentEdit.cells[1].innerText = document.getElementById('id').value;
    currentEdit.cells[2].innerText = document.getElementById('class').value;
    currentEdit.cells[3].innerText = document.getElementById('grade').value;
    currentEdit.cells[4].innerText = document.getElementById('contact').value;

    // form hide karo
    document.getElementById('hidden-form').style.display = "none";

    // form clear karo
    studentform.reset();

}
