const express = require("express")
const devs = express.Router()
const { getAllDevs, createDev, updateDev, deleteDev} = require("../queries/devs.js")

// GET ALL
devs.get("/", async (req, resp) => {
    const allDevs = await getAllDevs()

    if(allDevs.length){
        resp.status(200).json(allDevs)
    }
    else {
        resp.status(500).json({Error: "server error"})
    }
})

// CREATE 
devs.post("/", async (req, resp) => {
    const newDev = await createDev(req.body)

    if(!newDev.message){
        resp.status(200).json(newDev)
    }
    else {
        resp.status(500).json({error: newDev.message})
    }
})

devs.put("/:id", async (req, resp) => {
    const { id } = req.params
    const updatedDev = await updateDev(req.body, id)

    if(!updatedDev.message){
        resp.status(200).json(updatedDev)
    }
    else {
        resp.status(500).json({error: updatedDev.message})
    }
})

// DELETE 
devs.delete("/:id", async (req, resp) => {
    const { id } = req.params
    const deletedDev = deleteDev(id)

    if(!deletedDev.message){
        resp.status(200).json(deletedDev)
    }
    else {
        resp.status(500).json({error: deletedDev.message})
    }
})



module.exports = devs 