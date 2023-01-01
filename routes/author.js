const authorController = require("../controller/authorController");

const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor);

module.exports = router;