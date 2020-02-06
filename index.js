const express = require("express");

const app = express();

const port = 3001;

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
    }

    if (Object.keys(req.query).length === 0) {
      res.status(200).send(array);
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("ERROR OCCURED" + error);
  }
});

// Search users by ID
app.get("/users/:id", (req, res) => {
  const array = ["Petko", "Stanko", "Mirko"];

  // The route param value is in the request object
  const id = req.params.id;

  if (array[id]) {
    res.status(200).send(array[id]);
  } else {
    res.status(200).send("Data not found");
  }
});

app.listen(port, () => {
  console.log("Server started, hello world!");
});
