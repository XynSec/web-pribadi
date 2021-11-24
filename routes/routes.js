const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Rahma Syndu Grananta - Homepage" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Rahma Syndu Grananta - About Me" });
});


module.exports = router;
