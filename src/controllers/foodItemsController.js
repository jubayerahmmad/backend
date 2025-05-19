import Food from "../models/foodItems.js";
// Create new food item
export const addFood = async (req, res) => {
  try {
    const { name, category, image } = req.body;
    if (!name || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFood = await Food.create({ name, category, image });
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get
export const getFoods = async (req, res) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category) {
      query.category = category;
    }

    const foods = await Food.find(query);
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
