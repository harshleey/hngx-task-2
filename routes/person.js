const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

router.get("/persons/:id", personController.getData);
router.post("/persons", personController.postData);
router.put("/persons/:id", personController.updateData);
router.delete("/persons/:id", personController.deleteData);

module.exports = router;
