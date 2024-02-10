const mongoose = require("mongoose");

const connectionDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNT_STRG);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDb;
