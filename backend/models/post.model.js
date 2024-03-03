const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  message: {
    type: String,
    requiered: true,
  },
  author: {
    type: String,
    requiered: true,
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema)