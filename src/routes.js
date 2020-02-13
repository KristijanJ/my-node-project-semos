function routes(app, localStorage) {
  app.get("/", (req, res) => {
    res.status(200).send(`<h2>You have reached the server!</h2>`);
  });

  // Users route
  app.get("/users", (req, res) => {
    try {
      const name = req.query.name;
      // The route param value is in the request object
      if (name) {
        const name = req.query.name.toUpperCase();
        let found = "";
        for (const key in localStorage) {
          const element = localStorage[key];
          if (name === element.firstName.toUpperCase()) {
            found = element;
          }
        }
        if (found) {
          res.status(200).json(found);
        } else {
          res.status(200).json("Data not found");
        }
      } else {
        res.status(200).json(localStorage);
      }

      // if (Object.keys(req.query).length === 0) {
      //   res.status(200).send(array);
      // }
    } catch (error) {
      console.error(error);
      res.status(500).json("ERROR OCCURED" + error);
    }
  });

  // Search users by ID
  app.get("/users/:id", (req, res) => {
    // The route param value is in the request object
    const id = req.params.id;

    if (localStorage[id]) {
      res.status(200).json(localStorage[id]);
    } else {
      res.status(200).json("Data not found");
    }
  });

  // BOOKS
  app.post("/books/new", (req, res) => {
    // receive data object for a new book
    const data = req.body; // {...}

    // Used to check for missing fields
    let missingFields = {};

    if (!data) {
      res.status(400).json("Bad request, no data found.");
    } else {
      if (!data.isbn || !data.name || !data.author) {
        console.log(data);
        missingFields = {
          ISBN: data.isbn,
          NAME: data.name,
          AUTHOR: data.author
        }
        res.status(400).json({
          message: "Bad request, empty book fields.",
          missingFields: missingFields
        });
      } else {
        const found = localStorage.find(element => element.isbn === data.isbn);
        if (!found) {
          localStorage.push(data);
          console.log(localStorage);
          res
            .status(201)
            .json({ message: "Entry successfully created.", ...localStorage });
        } else {
          console.log(found);
          res.status(409).json("Entry already exists.");
        }
      }
    }
  });

  app.post("/books/new/bulk", (req, res) => {
    // receive data object for a new book
    const data = req.body; // {...}

    // Used to check empty books and what details are missing
    let missingFields = {};
    let emptyBooks = [];

    // Used to check if there are any existing books
    let existingBooks = [];
    let addedBooks = [];

    data.forEach((book, i) => {
      if (!book.isbn || !book.name || !book.author) {
        missingFields = {
          bookNumber: i+1,
          ISBN: book.isbn,
          NAME: book.name,
          AUTHOR: book.author
        }
        emptyBooks.push(missingFields);
        console.log(emptyBooks);
      }
    })

    if (emptyBooks.length > 0) {
      res.status(400).json({
        message: "Bad request, empty book fields.",
        emptyBooks: emptyBooks
      });
    } else {
      data.forEach((book, i) => {
        const found = localStorage.find(element => element.isbn === book.isbn);
        if (found) {
          existingBooks.push(found);
        } else {
          addedBooks.push(book);
          localStorage.push(book);
        }
      });
      res.status(201).json({
        booksAdded: [ ...addedBooks ],
        existingBooks: [...existingBooks],
        localStorage: localStorage
      });
    }
  });

  app.delete("/books/remove/:isbn", (req, res) => {
    const found = localStorage.findIndex(
      element => element.isbn === req.params.isbn
    );

    if (found) {
      localStorage.splice(found, 1);
      console.log(localStorage);
      res.status(200).json("Entry succesfully deleted.");
    } else {
      res.status(400).json("Bad request, no data found.");
    }
  });
}

module.exports = routes;
