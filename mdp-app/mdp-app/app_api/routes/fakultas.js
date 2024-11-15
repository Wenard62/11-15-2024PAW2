const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

// impor middleware auth dan role
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",fakultasController.getAllFakultas);
router.post("/",fakultasController.createFakultas);
router.get("/:id", fakultasController.getFakultasById);
router.put("/:id", fakultasController.updateFakultas);
router.delete("/:id", fakultasController.deleteFakultas);

module.exports = router;