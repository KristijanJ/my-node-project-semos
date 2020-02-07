function routes(app, localStorage) {
  app.get("/", (req, res) => {
    res.status(200).send(`<h2>You have reached the server!</h2>`);
  });

  // Users route
  app.get("/users", (req, res) => {
    try {
      const array = ["Petko", "Stanko", "Mirko"];
      const name = req.query.name;
      // The route param value is in the request object
      if (name) {
        const name = req.query.name.toUpperCase();
        const found = array.find(element => element.toUpperCase() === name);
        if (found) {
          res.status(200).send(found);
        } else {
          res.status(200).send("Data not found");
        }
      } else {
        res.status(200).send(array);
      }

      // if (Object.keys(req.query).length === 0) {
      //   res.status(200).send(array);
      // }
    } catch (error) {
      console.error(error);
      res.status(500).send("ERROR OCCURED" + error);
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