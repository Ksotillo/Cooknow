const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    tittle: String,
    description: String,
    category: String,
    time: Number,
    image: [String],
    ingredients: [String],
    difficulty: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Recipe", RecipeSchema)