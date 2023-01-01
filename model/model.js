const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    books: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Book"
        },
    ]
})


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    publishedDate: {
        type: String
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);
module.exports = { Book };
module.exports = { Author }

