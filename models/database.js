const mongoose = require("mongoose");

exports.getConnection = async function () {
  try {
    await mongoose.connect("mongodb://localhost/test_messaging");
    console.log("Database Connected")
  } catch (error) {
    console.log("Database.js",error);
  } 
}
