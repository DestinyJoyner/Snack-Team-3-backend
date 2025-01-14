// DEPENDENCIES
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const snackController = require("./controllers/snackController.js")

// CONFIGURATION
const app = express()


// MIDDLEWARE
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use("/snacks", snackController)
// dev route
app.use("/devs", require("./controllers/devs.js"))
// favorites route
app.use("/favorites", require("./controllers/favorites.js"))


// ROUTES
app.get("/", (req, res) => {
    res.status(200).send('Snacks Server')
})

app.get("/not-found", (req, res) => {
    res.status(404).json({error: "page not found"})
})

app.get("*", (req, res)=> {
    res.redirect("/not-found")
})


// EXPORT
module.exports = app
