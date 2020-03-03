const services = require('./services')
const middleWares = require('./middleWares')

function routes (server) {
    server.get('/', services.getInitialRoute)

    server.get(
      '/get-all-books', 
      middleWares.getAllBooks,
      services.getAllDocs
    )

    server.get(
      '/get-all-authors', 
      middleWares.getAllAuthors,
      services.getAllDocs
    )

    server.get(
      '/get-dead-authors', 
      middleWares.getDeadAuthors,
      services.getAllDocs
    )

    server.get('/get-books-by-author/:name', services.getBooksByAuthor)

    server.post('/add-book', services.createNewBook)

    server.post('/update-book/:isbn', services.updateBook)

    server.post('/update-author/:authorId', services.updateAuthor)

    server.post('/add-author', services.createNewAuthor)

    server.delete('/remove-book/:isbn', services.removeBook)

    server.get('/download-manual', services.getFile)

    server.post('/upload-file', services.writeFile)
}

module.exports = routes