const models = require("./models");

class MiddleWares {
  async getAllBooks(req, res, next) {
    const books = await models.Book.find();
    books.forEach(book => {
      models.Author.findOne({ _id: book.author })
       .then(author => book.author = author.firstName + " " + author.lastName)
    });
    res.docs = books;
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
