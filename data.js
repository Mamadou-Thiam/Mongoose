const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  nom:String,
  âge: Number,
  favoriteFoods: [String]
});

const model = mongoose.model("Data", dataSchema);
module.exports = model;
