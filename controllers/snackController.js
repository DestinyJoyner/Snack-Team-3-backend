const express = require("express")
const snacks = express.Router()

const {getAllSnacks, getOneSnack, createSnack, updateSnack, deleteSnack,} = require("../queries/snacks.js")

const { validateRequest, confirmHealth } = require("../validations.js")



// GET ALL
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks()

    if(allSnacks.length){
        res.status(200).json(allSnacks)
    }
    else{
        res.status(500).json({Error: "server error"})
    }  
})

// GET ONE
snacks.get("/:id", async (req, res) => {
    const { id } = req.params
    const snack = await getOneSnack(id)

    if(!snack.message){
        res.status(200).json(snack)
    }
    else {
        res.redirect("/not-found")
    }
})

// CREATE
snacks.post("/", validateRequest, confirmHealth, async (req, res) => {
    const newSnack = await createSnack(req.body)

    if(!newSnack.message){
        res.status(200).json(newSnack)
    }
    else {
        res.status(500).json({error: newSnack.message})
    }
})

// UPDATE
snacks.put("/:id", validateRequest, confirmHealth, async (req, res) => {
    const { id } = req.params
    const updatedSnack = await updateSnack(req.body, id)

    if(!updatedSnack.message){
        res.status(200).json(updatedSnack)
    }
    else {
        res.status(500).json({error: updatedSnack.message})
    }
})

// DELETE 
snacks.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSnack = await deleteSnack(id)

    if(!deletedSnack.message){
        res.status(200).json(deletedSnack)
    }
    else{
        res.status(500).json({error: deletedSnack.message})
    }
})





module.exports = snacks