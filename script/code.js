// Please create an application that will let users submit their ID number using an input element and check to see if it is 13 characters long and if it is a number:
// * Display the following data
// - Day/month/year
// - Gender: Male or Female


function validateIdNumber() {
    let idNumberInput = document.getElementById("idNumber").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (idNumberInput.length !== 13 || isNaN(idNumberInput)) {
        resultDiv.innerHTML = "<p class='error'>ID number must be 13 digits long and contain only numbers.</p>";
        return;
    }

    let year = idNumberInput.substring(0, 2);
    let month = idNumberInput.substring(2, 4);
    let day = idNumberInput.substring(4, 6);
    let genderDigit = idNumberInput.substring(6, 7);

    let gender = genderDigit >= 5 ? "Male" : "Female";

    resultDiv.innerHTML = "<p>Day/month/year: " + day + "/" + month + "/20" + year + "</p>";
    resultDiv.innerHTML += "<p>Gender: " + gender + "</p>";
}





