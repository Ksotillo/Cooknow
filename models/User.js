const mongoose = require('mongoose')
const Recipe = require('./Recipe')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
    recipes: {
        type: [Recipe]
    },
    favRecipes: {
        type: [Recipe]
    }
})

module.exports = mongoose.model("User", UserSchema)