function deleterow(row) {
    var row = document.getElementById(row);
    row.remove();
}

var editbtn = document.getElementById("submit-btn");
var myform = document.getElementById("myform");
var formcontainer = document.getElementById('form-container')
var row;
function editData(button) {
    formcontainer.style.display = "block";
    row = button.parentNode.parentNode;
    document.getElementById('name').value = row.cells[0].innerText;
    document.getElementById('id').value = row.cells[1].innerText;
    document.getElementById('percentage').value = row.cells[2].innerText;
    document.getElementById('contact').value = row.cells[3].innerText;

}
myform.addEventListener("submit", function (e) {
    e.preventDefault();
    row.cells[0].innerText = document.getElementById('name').value;
    row.cells[1].innerText = document.getElementById('id').value;
    row.cells[2].innerText = document.getElementById('percentage').value;
    row.cells[3].innerText = document.getElementById('contact').value;
    formcontainer.style.display = "none"; // hide form
    myform.reset(); // optional: clear form
})

