
import {
  categories,
  getNextCategoryId
} from "../Model/categoryModel.js";

// Get all categories
export const getCategories = (req, res) => {
  res.status(200).json({
    categories
  });
};

// Get category by ID
export const getCategoriesId = (req, res) => {
  const category = categories.find(
    (c) => c.id === Number(req.params.id)
  );

  if (!category) {
    return res.status(404).json({
      message: "Category not found"
    });
  }

  res.status(200).json({
    category
  });
};

// Create category
export const createCategory = (req, res) => {
  const { name } = req.body;

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      message: "Category name is required"
    });
  }

  const normalizedName = name.trim();

  if (
    categories.some(
      (c) =>
        c.name.toLowerCase() ===
        normalizedName.toLowerCase()
    )
  ) {
    return res.status(409).json({
      message: "Category already exists"
    });
  }

  const category = {
    id: getNextCategoryId(),
    name: normalizedName
  };

  categories.push(category);

  res.status(201).json({
    message: "Category created",
    category
  });
};

// Delete category
export const deleteCategory = (req, res) => {
  const index = categories.findIndex(
    (c) => c.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Category not found"
    });
  }

  categories.splice(index, 1);

  res.json({
    message: "Category deleted"
  });
};
