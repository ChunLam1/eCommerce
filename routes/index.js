const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/new", (req, res, next) => {
  res.render("newProduct");
});

router.get("/women", (req, res, next) => {
  res.render("women");
});

router.get("/men", (req, res, next) => {
  res.render("men");
});
module.exports = router;
