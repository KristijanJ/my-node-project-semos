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
        let found = '';
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
}

module.exports = routes