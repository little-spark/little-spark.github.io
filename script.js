const app = document.querySelector("#app");
const button = document.querySelector("#button");
let tipAmount;
let totalAmount;
let tipPercent;
let percent = document.getElementById("tipSelect");

//assign tip percent via selector
percent.addEventListener("change", function handleChange(event) {
  tipPercent = Number(event.target.value);
  console.log(tipPercent);
});

button.addEventListener("click", function () {
  const input = app.querySelector("#form input");
  const userInput = input.value;
  input.value = "";
  calculateTip(userInput);
  calculateTotal(userInput);
  updateTip();
  updateTotal();
});

//tip calculation
const calculateTip = (userInput) => {
  tipAmount = Math.round(userInput * tipPercent);
};

//get total plus tip
const calculateTotal = (userInput) => {
  totalAmount = Number(tipAmount) + Number(userInput);
};

//return tip amount to page
const updateTip = () => {
  //next line allows us to always have two digits after a decimal point
  tipAmount = tipAmount.toFixed(2);

  document.getElementById("tipAmount").innerHTML = `$${tipAmount}`;
};

//return total amount to page
const updateTotal = () => {
  //next line allows us to always have two digits after a decimal point
  totalAmount = totalAmount.toFixed(2);
  document.getElementById("totalAmount").innerHTML = `$${totalAmount}`;
};
