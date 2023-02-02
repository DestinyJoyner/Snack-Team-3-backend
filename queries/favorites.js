const db = require("../db/dbConfig.js");

const getFavorites = async () => {
    try {
        const allFavs = await db.any('SELECT * FROM favorites')
        return allFavs
    } 
    catch (error) {
        return error
    }
}

const createFavorite = async (obj) => {
    try {
        const newFav = await db.one(
            "INSERT INTO favorites (name, fiber, protein, added_sugar, is_healthy, image, carbs, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
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
        )
        return newFav
    } 
    catch (error) {
        return error
    }
}

const deleteFavorite = async (idValue) => {
    try {
       const deletedFav = await db.one('DELETE FROM favorites WHERE id=$1 RETURNING *', idValue)
       return deletedFav 
    } 
    catch (error) {
        return error
    }
}

module.exports = {
    getFavorites,
    createFavorite,
    deleteFavorite
}