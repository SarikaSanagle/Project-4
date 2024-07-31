const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`mangodb database connection succussful ok`);
});

const restaurantsRouter = require("./routes/restaurants");

const usersRouter = require("./routes/users");

app.use("./restaurants", restaurantsRouter);
app.use("./users", usersRouter);

app.listen(port, () => {
  console.log(`Server is working on port $(port)`);
});
