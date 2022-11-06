const mongoose = require("mongoose");
let MONGODB_URI =
  process.env.PROD_MONGODB ||
  "mongodb+srv://robertbalonek:Bdiddy12!@cluster0.z9sznmp.mongodb.net/test";
mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((e) => console.error("Connection error", e.message));
module.exports = mongoose.connection;
