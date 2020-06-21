const { schema } = require("./userModel");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieName: {type: String, required: true}
})

module.exports = mongoose.model("Movie", movieSchema);