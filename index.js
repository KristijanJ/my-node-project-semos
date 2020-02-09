const express = require("express"); // npm install --save espress

const routes = require("./src/routes");
const cors = require("cors"); // npm install --save cors
const app = express();

app.use(cors())

const port = 3001;

const localStorage = {}

localStorage['1'] = {
  id: 1,
  firstName: "Petko",
  lastName: "Petkovski",
  email: "petko@gmail.com"
};
localStorage['2'] = {
  id: 2,
  firstName: "Stanko",
  lastName: "Stankovski",
  email: "stanko@gmail.com"
};
localStorage['3'] = {
  id: 3,
  firstName: "Mirko",
  lastName: "Mirkovski",
  email: "mirko@gmail.com"
};

// Initialize routes with the server => app
routes(app, localStorage);

// const array = ["Petko", "Stanko", "Mirko"];

app.listen(port, () => {
  console.log("Server started, hello world!");
});
