const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

router.get("/:id", personController.getData);
router.post("/", personController.postData);
router.put("/:id", personController.updateData);
router.delete("/:id", personController.deleteData);

module.exports = router;
