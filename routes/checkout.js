const router = require("express").Router();
const stripe = require("stripe")("sk_test_VePHdqKTYQjKNInc7u56JBrQ");
const PORT = process.env.PORT || 3000;
const YOUR_DOMAIN = `http://localhost:${PORT}`;

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "{{PRICE_ID}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  res.redirect(303, session.url);
});

module.exports = router;
