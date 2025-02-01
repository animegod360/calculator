const display = document.getElementById("display");
const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const btn5 = document.getElementById("five");
const btn6 = document.getElementById("six");
const btn7 = document.getElementById("seven");
const btn8 = document.getElementById("eight");
const btn9 = document.getElementById("nine");
const btn0 = document.getElementById("zero");
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equals");
const dot = document.getElementById("dot");
const del = document.getElementById("clear");

function btnCOntrol(btnNAme, digit) {
  btnNAme.addEventListener(`click`, () => {
    display.value += digit;
  });
}

del.addEventListener(`click`, () => {
  let currentvalue = display.value;
  display.value = currentvalue.slice(0, -1);
});

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

btnCOntrol(btn1, "1");
btnCOntrol(btn2, "2");
btnCOntrol(btn3, "3");
btnCOntrol(btn4, "4");
btnCOntrol(btn5, "5");
btnCOntrol(btn6, "6");
btnCOntrol(btn7, "7");
btnCOntrol(btn8, "8");
btnCOntrol(btn9, "9");
btnCOntrol(btn0, "0");
btnCOntrol(plus, "+");
btnCOntrol(minus, "-");
btnCOntrol(multi, "*");
btnCOntrol(divide, "/");
btnCOntrol(dot, ".");
