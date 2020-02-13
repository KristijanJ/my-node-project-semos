# Project for Node from Semos

## BOOKS API

To launch the frontend for the Books API, use the folder frontend-books.
There you can add a single book, or add multiple forms to add multiple books.
Watch in the console to see any success messages or errors, because the frontend does not fully show them.

### The Backend service has the following options:

**Add a single book**

API: `/books/new`

The API call checks for any missing data and returns a message which data is missing.

The API call checks if a book already exists and informs the user.


**Add multiple books**

API: `/books/new/bulk`

The API call checks for any missing data and returns a message which data is missing in which book.

The API call checks if a book already exists, records the new books and informs the user which book is a duplicate.