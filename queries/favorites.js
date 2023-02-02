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
            "INSERT INTO favorites (id,name, fiber, protein, added_sugar, is_healthy, image, carbs, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        obj.id,
        obj.name,
        obj.fiber,
        obj.protein,
        obj.added_sugar,
        obj.is_healthy,
        obj.image,
        obj.carbs,
        obj.description,
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