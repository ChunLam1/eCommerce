const prices = document.querySelectorAll(".price");
const quantities = document.querySelectorAll(".quant");
const subTotal = document.querySelectorAll(".subTotal");
const btn = document.querySelector(".btnPrice");
const totalPrice = document.getElementById("totalPrice");

function calculatePrice() {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    subTotal[i].innerHTML = prices[i].innerHTML * quantities[i].innerHTML;
    total += prices[i].innerHTML * quantities[i].innerHTML;
  }
  totalPrice.innerHTML = total + "€";
}

window.onload = calculatePrice;
