const express = require("express");
const connectDb = require("./DB/Db");
require("dotenv").config();
const tasks = require("./Routes/router");
const app = express();
const port =process.env.PORT || 3000;
app.use(express.static("./Frontend"));
app.use(express.json());
app.use(cors());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb();
    app.listen(port, console.log("app listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
