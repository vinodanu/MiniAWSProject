const express = require("express");
const expressLayouts = require('express-ejs-layouts')

const app = express();

//connection for db
require("./db");

//EJS
app.use(expressLayouts)
app.set('layout', './layouts/layout');
app.set("view engine", "ejs");

//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", require("./routes/welcome.route"))
app.use("/users", require('./routes/register.route'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("Server started at port : ",PORT))

