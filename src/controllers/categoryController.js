import Category from "../models/category.js";

// Create and add to db
export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }
    const newCateogry = await Category.create({ category });
    res.status(201).json(newCateogry);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET

export const getCategory = async (req, res) => {
  const category = await Category.find();
  res.json(category);
};
