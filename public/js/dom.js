const prix = document.querySelectorAll(".price");
const nombre = document.querySelectorAll(".quant");
const totalPrice = document.querySelectorAll(".totalPrice");
const btn = document.querySelector(".btnPrice")

function changePrice(price,quantity){
  return price.forEach(prices => {
    console.log(prices.textContent,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    
  })
};

 changePrice(prix,nombre)