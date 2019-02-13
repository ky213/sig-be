const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

var cors = require("cors");

const app = express();

// connection to db
mongoose
  .connect("mongodb://db:27017/sig-eadn")
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));

app.use(cors());

// importing routes
const RestDjezzyRoutes = require("./routes/RestDjezzy");
const RestAlgeriePoste = require("./routes/RestAlgeriePoste");
const RestOoredoo = require("./routes/RestOoredoo");
const RestLTE = require("./routes/RestLTE");
const RestMSAN = require("./routes/RestMSAN");
const RestLFO = require("./routes/RestLFO");

// settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// routes
app.use("/", RestDjezzyRoutes);
app.use("/", RestAlgeriePoste);
app.use("/", RestOoredoo);
app.use("/", RestLTE);
app.use("/", RestMSAN);
app.use("/", RestLFO);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
