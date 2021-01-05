const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// const urlencodedParser = bodyParser.urlencoded({extended: false});
const db = require("./app/models");

app.set("view engine", "hbs");
 
module.exports = app;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});









