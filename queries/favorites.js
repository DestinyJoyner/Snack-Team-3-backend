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
            "INSERT INTO favorites (id, name, snack_id) VALUES ($1, $2, $3) RETURNING *",
      [
        obj.id,
        obj.name,
        obj.snack_id
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