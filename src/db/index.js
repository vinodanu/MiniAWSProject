const {connect} = require('mongoose')

const URI = "mongodb+srv://vinod:kwuRzzfeIwRgbrHX@cluster0.su13v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect(URI, console.log("Mongo Connected !!!"))