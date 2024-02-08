const mongoose = require("mongoose");

const connectionDb = (url) => {
return mongoose.connect(url, {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

});
};

module.exports = connectionDb;
