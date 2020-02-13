const express = require("express"); // npm install --save espress
const bodyParser = require("body-parser");

const routes = require("./src/routes");
const cors = require("cors"); // npm install --save cors
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

const port = 3001;

const localStorage = [];

localStorage.push({ isbn: "1", name: "Crime and punishment" });
localStorage.push({ isbn: "2", name: "Witcher" });
localStorage.push({ isbn: "3", name: "The lord of the rings" });
localStorage.push({
  isbn: "4",
  name: "Idiot",
  author: "kiko",
  createdDate: "2020-01-13T19:44:55.152Z"
});

// localStorage['1'] = {
//   id: 1,
//   firstName: "Petko",
//   lastName: "Petkovski",
//   email: "petko@gmail.com"
// };
// localStorage['2'] = {
//   id: 2,
//   firstName: "Stanko",
//   lastName: "Stankovski",
//   email: "stanko@gmail.com"
// };
// localStorage['3'] = {
//   id: 3,
//   firstName: "Mirko",
//   lastName: "Mirkovski",
//   email: "mirko@gmail.com"
// };

// Initialize routes with the server => app
routes(app, localStorage);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
