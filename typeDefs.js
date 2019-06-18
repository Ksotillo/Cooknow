const {
    gql
} = require('apollo-server')

module.exports = gql `
    type User {
        _id: ID
        name: String
        email: String
        picture: String
        recipes: [Recipe]
        favRecipes: [Recipe]
    }

    type Recipe {
        _id: ID
        createdAt: String
        tittle: String
        description: String
        category: String
        time: Int
        steps: String
        image: [String]
        ingredients: [String]
        difficulty: String
        author: User
    }

    type Query {
        me: User
    }

`