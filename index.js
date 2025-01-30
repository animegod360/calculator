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
const btnadd = document.getElementById("add");
const btnsub = document.getElementById("subract");
const btnmul = document.getElementById("multiply");
const btndiv = document.getElementById("divide");
const btnequal = document.getElementById("equals");
const btndelete = document.getElementById("clear");
const display = document.getElementById("display");
const btndot = document.getElementById("dot");
const disvalue = document.getElementById("display").value;

btn1.addEventListener("click", () => {
  display.value += "1";
});
btn2.addEventListener("click", () => {
  display.value += "2";
});
btn3.addEventListener("click", () => {
  display.value += "3";
});
btn4.addEventListener("click", () => {
  display.value += "4";
});
btn5.addEventListener("click", () => {
  display.value += "5";
});
btn6.addEventListener("click", () => {
  display.value += "6";
});
btn7.addEventListener("click", () => {
  display.value += "7";
});
btn8.addEventListener("click", () => {
  display.value += "8";
});
btn9.addEventListener("click", () => {
  display.value += "9";
});
btn0.addEventListener("click", () => {
  display.value += "0";
});
btnadd.addEventListener("click", () => {
  display.value += "+";
});
btnsub.addEventListener("click", () => {
  display.value += "-";
});
btnmul.addEventListener("click", () => {
  display.value += "*";
});
btndiv.addEventListener("click", () => {
  display.value += "/";
});
btndot.addEventListener("click", () => {
  display.value += ".";
});

function calculate() {
  let value = eval(disvalue);
  return value;
}

btndelete.addEventListener("click", () => {
  deletefunc();
});

function deletefunc() {
  afterdelete = disvalue.slice(0, -1);
}

btnequal.addEventListener("click", () => {
  display.value = calculate();
});
