const db = require("../db/dbConfig.js")

const getAllDevs = async () => {
    try {
        const allDevs = await db.any('SELECT * FROM devs')
        return allDevs
    } 
    catch (error) {
        return error
    }
}

const createDev = async (obj) => {
    try {
        const newDev = await db.one(
            'INSERT INTO devs (name, imageURL, githubURL, indeedURL, email, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [
                obj.name,
                obj.imageURL,
                obj.githubURL,
                obj.indeedURL,
                obj.email,
                obj.description
            ]
        );
        return newDev
    } 
    catch (error) {
        return error
    }
}

const updateDev = async (obj, idValue) => {
    try {
        const updatedDev = await db.one(
            'UPDATE devs SET name=$1, imageURL=$2, githubURL=$3, indeedURL=$4, email=$5, description=$6 WHERE id=$7 RETURNING *',
            [
                obj.name,
                obj.imageURL,
                obj.githubURL,
                obj.indeedURL,
                obj.email,
                obj.description,
                idValue
            ]
        )
        return updatedDev
    } 
    catch (error) {
        return error
    }
}


module.exports = {
    getAllDevs,
    createDev,
    updateDev,
}