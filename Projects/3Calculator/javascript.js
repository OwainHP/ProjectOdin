const btn = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equals = document.querySelector(".sum")
const clear = document.querySelector(".cancel")
const operator = document.querySelectorAll(".operator")

  btn.forEach(function(button) {
    button.addEventListener("click", function() {
        if (display.innerText=="0") {
            display.innerText=""
        };
        let text = button.innerText;
        display.innerText = display.innerText+text;
    });
  });



operator.forEach(function(operator) {
    operator.addEventListener("click", function() {
        number = display.innerText;
        display.innerText = "0";
        operatorToUse = operator.innerText;
    });
  });

equals.addEventListener("click", function() {
    number2 = display.innerText;
    if (operatorToUse == "+") {
        display.innerText = Number(number)+Number(number2);
    } else if (operatorToUse == "-") {
        display.innerText = Number(number)-Number(number2);
    } else if (operatorToUse == "÷") {
        display.innerText = Number(number)/Number(number2);
    } else if (operatorToUse == "x") {
        display.innerText = Number(number)*Number(number2);
    }
})

clear.addEventListener("click", function() {
    display.innerText = "0";
    number = 0;
    number2 = 0;
})