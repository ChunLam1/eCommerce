const addToBasketButtons = document.getElementsByClassName("btnBasket");

[... addToBasketButtons].forEach(button => {
    
    button.onclick = (e) => {
        const productId = e.target.getAttribute("data-productid");
        const quantity = e.target.previousElementSibling.value;
        console.log(quantity);
        axios.patch("/cart", {
            productId,
            quantity
        })
    };
});