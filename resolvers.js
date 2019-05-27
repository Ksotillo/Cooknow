const user = {
    _id: "1",
    name: "Kevin",
    email: "Ksotillo@gmail.com",
    picture: "https://cloudinary.com/asf"
}


module.exports = {
    Query: {
        me: () => user
    }
}