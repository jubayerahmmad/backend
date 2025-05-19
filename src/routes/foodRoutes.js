import express from "express";
import { addFood, getFoods } from "../controllers/foodItemsController.js";

const router = express.Router();

router.post("/add", addFood);
router.get("/", getFoods);

export default router;
