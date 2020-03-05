const models = require("./models");

class MiddleWares {
  async getAllBooks(req, res, next) {
    const books = await models.Book.find();
    const returnBooks = [];
    books.forEach(async (book, i) => {
      returnBooks.push(book)
      const author = await models.Author.findOne({ _id: book.author })
      returnBooks[i].author = author.firstName + " " + author.lastName
    });
    console.log(returnBooks)
    res.docs = returnBooks;
    next();
  }

  async getAllAuthors(req, res, next) {
    const authors = await models.Author.find();
    res.docs = authors;
    next();
  }

  async getDeadAuthors(req, res, next) {
    const deadAuthors = await models.Author.find({
      dateOfPassing: { $exists: true, $ne: null }
    });
    res.docs = deadAuthors;
    next();
  }
}

module.exports = new MiddleWares();
