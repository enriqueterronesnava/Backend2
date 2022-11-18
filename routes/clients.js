const express = require("express");
const router = express.Router();

const invController = require("../controllers/clients");

router.get("/", invController.getAll);

router.get("/:id", invController.getSingle);

router.post("/", invController.createContact);

router.put("/:id", invController.updateContact);

router.delete("/:id", invController.deleteContact);

module.exports = router;
