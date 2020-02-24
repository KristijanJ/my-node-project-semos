# Project for Node from Semos

## BOOKS API

To launch the frontend for the Books API, use the folder frontend-books.
There you can get all books, add a single book, search by author or delete a book by ISBN.
Watch in the console to see any success messages or errors, because the frontend does not fully show them.

### The Backend service has the following options:

**Get all books**
API: `/get-all-books`

 - The API call fetches all books from MongoDB and returns them in the console.

**Add a single book**
API: `/add-book`

 - The API call adds a new book into MongoDB.
 - The API call checks for any missing data and returns a message if any data is missing.
 - The API call checks if a book already exists and informs the user.

 **Get all books by author**
API: `/get-books-by-author/:name`

 - The API call fetches all books from MongoDB for the inputed author and returns them in the console.


**Delete a single books**
API: `/remove-book/:isbn`

- The API call deletes a single book from MongoDB for the inputed ISBN of the book.