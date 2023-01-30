const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getOneSnack = async (idValue) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", idValue);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image, carbs, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.image,
        snack.carbs,
        snack.description,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (snack, idValue) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6, carbs=$7, description=$8 WHERE id=$9 RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.image,
        snack.carbs,
        snack.description,
        idValue,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (idValue) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      idValue
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getOneSnack,
  createSnack,
  updateSnack,
  deleteSnack,
};
