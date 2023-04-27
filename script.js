const add = (a,b) =>{
    return a+b;
};
const subtract = (a,b) =>{
    return a-b;
};
const multiply = (a,b) => {
    return a*b;
};
const divide = (a,b) => {
    return a/b;
}

let first;
let operator;
let second;

const operate = (operator, n1, n2) =>{
    switch (operator) {
        case "add":
            return `${add(parseFloat(n1), parseFloat(n2))}`;
        case "subtract":
            return `${subtract(parseFloat(n1),parseFloat(n2))}`;
        case "multiply":
            return `${multiply(parseFloat(n1),parseFloat(n2))}`;
        case "divide":
            if (n2 !== "0"){
            return `${divide(parseFloat(n1),parseFloat(n2))}`;}
            else {
                return "SnaRkY eRroR"
            }
        default:
            console.log("ERROR")
            break;
    };
};

const display = document.querySelector("#display")
const displayop = document.querySelector("#opdisplay")

const addDisplay = (number) => {
    display.textContent = display.textContent + number;
}

let buttons = document.querySelectorAll(".number");
buttons.forEach(button => {
    button.addEventListener("click",() => addDisplay(button.id));
});

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "0":
            document.getElementById('0').click();
            break;
        case '1':
            document.getElementById('1').click();
            break;
        case '2':
            document.getElementById('2').click();
            break;
        case '3':
            document.getElementById('3').click();
            break;
        case '4':
            document.getElementById('4').click();
            break;
        case '5':
            document.getElementById('5').click();
            break;
        case '6':
            document.getElementById('6').click();
            break;
        case '7':
            document.getElementById('7').click();
            break;
        case '8':
            document.getElementById('8').click();
            break;
        case '9':
            document.getElementById('9').click();
            break;
        case '=':
            document.getElementById('equal').click();
            break;
        case "c":
        case "c":
            document.getElementById('clear').click();
            break;
        case "Backspace":
            document.getElementById('backspace').click();
            break;
        case "*":
            document.getElementById('multiply').click();
            break;
        case "-":
            document.getElementById('subtract').click();
            break;
        case "+":
            document.getElementById('add').click();
            break;
        case "/":
            document.getElementById('divide').click();
            break;
        case "*":
            document.getElementById('multiply').click();
            break;

    }
  });

let operators = document.querySelectorAll(".operator");
operators.forEach(op => {
    op.addEventListener("click", ()=> {
        first = display.textContent;
        operator = op.id.toString();
        opdisplay.textContent = op.textContent;
        display.textContent = ""


    })
});
let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", ()=> {
    second = display.textContent
    let result = operate(operator, first, second);
    display.textContent = result;
    opdisplay.textContent= "";
});
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    opdisplay.textContent= "";
})

let dot = document.querySelector(".dot");
dot.addEventListener("click",() => {
    if (display.textContent.includes("."))
    {}
    else {addDisplay(".")}
})
