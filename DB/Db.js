const mongoose = require("mongoose");

const connectionDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectionDb;
