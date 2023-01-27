const mongoose = require("mongoose");
require("dotenv").config();

const configdb = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = function () {
  const db = process.env.DATABASE_URL;
  mongoose
    .connect(db, configdb)
    .then(() => console.log(`Connected to ${db}....`));
};
