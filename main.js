"use strict";


function convert() {
    let input = document.getElementById("valueInput");
    let inputNoSpaces = String(input.value.replace(" ", ""));
    if (input.validity.valid) {
        if (inputNoSpaces != "") {
            let valueInput = input.value;
            valueInput = Number(String(valueInput).replace(",", "."));
            if (String(valueInput) != "NaN") {
                alert(celsiusToFahrenheit(valueInput));
            }
            else {
                throwError();
            }
        }
        else {
            throwError();
        }
    }
}
function celsiusToFahrenheit(value) {
    return ((9 / 5) * value + 32).toFixed(2);
}
function throwError() {
    alert("Ошибка ввода. Введите корректное число.");
}

function displayName() {
    let admin,
        _name = "Василий"; //назвал так, потому что идешка ругается на name

    admin = _name;
    let adminName = document.getElementById("adminName");
    adminName.textContent = admin;
    adminName.style.opacity = 1;
}

function diffTypes() {
    let value = 1000 + "108";
    let diffTypesValue = document.getElementById("diffTypesValue");
    diffTypesValue.textContent = value + " - происходит конкатенация";
    diffTypesValue.style.opacity = 1;
}