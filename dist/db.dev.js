"use strict";

var express = require("express");

var path = require("path");

var fs = require("fs");

var app = express();

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Portfolio", {
  useNewUrlParser: true
});
var port = 80; // Define mongoose schema 

var contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String
});
var Contact = mongoose.model('Contact', contactSchema);
app.use("/static", express["static"]("static"));
app.use(express.urlencoded()); // app.set("view engine", "pug")
// app.set("views", path.join(__dirname, "views"))
// app.get("/", (req, res) => {
//     const put = {}
//     res.status(200).render("home.pug",put)
// })

app.get("/contact", function (req, res) {
  var put = {};
  res.status(200).render("contact.pug", put);
});
app.post("/contact", function (req, res) {
  var myData = new Contact(req.body);
  myData.save().then(function () {
    res.send("This item has been saved to the database");
  })["catch"](function () {
    res.status(400).send("Item was not send to the database");
  }); // res.status(200).render("contact.pug" )
});
app.listen(port, function () {
  console.log("The application started successfully on port ".concat(port));
});
//# sourceMappingURL=db.dev.js.map
