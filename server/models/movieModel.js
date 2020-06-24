const { schema } = require("./userModel");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  liked: { type: Boolean, default: false },
  comment: { type: String, default: "" },
});

module.exports = mongoose.model("Movie", movieSchema);
