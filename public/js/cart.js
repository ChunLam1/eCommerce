// const res = require("express/lib/response");

const addToBasketButtons = document.getElementsByClassName("btnBasket");
const emptyCartButton = document.getElementById("btnEmpty");

[...addToBasketButtons].forEach((button) => {
  button.onclick = async (e) => {
    const productId = e.target.getAttribute("data-productid");
    const quantity = e.target.previousElementSibling.value;
    const res = await axios.patch("/cart", { productId, quantity });
  };
});

emptyCartButton.onclick = async () => {
  const { data } = await axios.patch("/cart/empty");
  location.reload();
};
