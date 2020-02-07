const express = require("express"); // npm install --save espress

const routes = require("./src/routes");
const cors = require("cors"); // npm install --save cors
const app = express();

app.use(cors())

const port = 3001;

const localStorage = {}

localStorage['1'] = "Petko";
localStorage['2'] = "Stanko";
localStorage['3'] = "Mirko";

// Initialize routes with the server => app
routes(app, localStorage);

// const array = ["Petko", "Stanko", "Mirko"];

app.listen(port, () => {
  console.log("Server started, hello world!");
});
