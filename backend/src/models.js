const mongoose = require('mongoose')

/*
  BOOK SCHEMA
*/
const bookSchema = new mongoose.Schema({
    // Book model template
    isbn: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    year: {
      type: String
    }
})

const Book = mongoose.model('Book', bookSchema)

/*
  AUTHOR SCHEMA
*/
const authorSchema = new mongoose.Schema({
  // Author model template
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date
  },
  dateOfPassing: {
    type: Date
  }
})

const Author = mongoose.model('Author', authorSchema)

module.exports = {
    Book: Book,
    Author: Author
}