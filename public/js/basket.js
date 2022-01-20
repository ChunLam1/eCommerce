const addToBasketButtons = document.getElementsByClassName("btnBasket");

[...addToBasketButtons].forEach((button) => {
  button.onclick = async (e) => {
    e.preventDefault()
    const productId = e.target.getAttribute("data-productid");
    const quantity = e.target.previousElementSibling.value;
    const {data} = await axios.patch("/cart", { productId, quantity });
    console.log(data)
    return
  };
});
