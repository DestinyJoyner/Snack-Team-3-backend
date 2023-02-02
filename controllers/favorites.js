const express = require("express")
const favorites = express.Router()
const { getFavorites, createFavorite, deleteFavorite} = require("../queries/favorites.js")

// GET ALL
favorites.get("/", async (req, resp) => {
    const allFavs = await getFavorites()

    if(allFavs.length){
        resp.status(200).json(allFavs)
    }
    else {
        resp.status(500).json({error:"server error"})
    }
    
})

// CREATE
favorites.post("/", async (req, resp) => {
    const newFav = await createFavorite(req.body)

    if(!newFav.message){
        resp.status(200).json(newFav)
    }
    else {
        resp.status(500).json({error: newFav.message})
    }
})

// DELETE 
favorites.delete("/:id", async (req, resp) => {
    const { id } = req.params
    const deletedFav = await deleteFavorite(id)

    if(!deletedFav.message){
        resp.status(200).json(deletedFav)
    }
    else {
        resp.status(500).json({error: deletedFav.message})
    }
})

module.exports = favorites