document.getElementById('submit').onclick = function() {
    let doSubmit = validateForm(); //Try to use var, let, and const in this method to see why the boolean isnt working. Then check html document.

    if(doSubmit == false) {
        return false;
    }
}

function validateForm() {

    let nameFirst = document.getElementById('nameFirst');
    let theValue = nameFirst.value;

    if(theValue != "Cameron") {
        console.log("Check the value of your input!");

        let messageHolder = document.getElementById('target');
        messageHolder.style.color = "red";
        messageHolder.innerHTML = "<h2>Put in the correct information</h2>";
        //nameFirst.select();
        nameFirst.focus();
        return false;
    }
}