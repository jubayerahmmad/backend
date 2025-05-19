import express from "express";
import { addCategory, getCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/add-category", addCategory);
router.get("/", getCategory);

export default router;
