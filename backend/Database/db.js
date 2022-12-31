require("dotenv").config();

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URL;

exports.dbconnect = async () => {
  mongoose.set("strictQuery", false);

  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`database connection successfull ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(`not connect reason ${error}`);
    });
};
