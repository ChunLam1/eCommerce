const addToBasketButtons = document.getElementsByClassName("btnBasket");

[...addToBasketButtons].forEach((button) => {
  button.onclick = async (e) => {
    const productId = e.target.getAttribute("data-productid");
    const quantity = e.target.previousElementSibling.value;
    const res = await axios.patch("/cart", { productId, quantity });
  };
});
