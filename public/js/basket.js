const addToBasketButtons = document.getElementsByClassName("btnBasket");
const btnMinus = document.querySelectorAll(".btnMinus");
const btnPlus = document.querySelectorAll(".btnPlus");
const quantity = document.querySelectorAll("quantity");

[...addToBasketButtons].forEach((button) => {
  button.onclick = async (e) => {
    console.log(btnPlus);
    e.preventDefault();
    const productId = e.target.getAttribute("data-productid");
    const quantity = e.target.previousElementSibling.value;
    const { data } = await axios.patch("/cart", { productId, quantity });
    return;
  };
});
