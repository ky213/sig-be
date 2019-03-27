const fileToDb = require("./methode/fileToDb");
const fileToDb_inOne = require("./methode/fileToDb_inOne");

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

//app.use(cors({ origin: "http://localhost:8080" }));
app.use(cors());
// importing routes
const RestDjezzyRoutes = require("./routes/RestDjezzy");
const RestAlgeriePoste = require("./routes/RestAlgeriePoste");
const RestOoredoo = require("./routes/RestOoredoo");
const RestLTE = require("./routes/RestLTE");
const RestMSAN = require("./routes/RestMSAN");
const RestLFO = require("./routes/RestLFO");

const RestSchemas = require("./routes/RestSchemas");
const RestCollections = require("./routes/RestCollections");
const RestSearchCollections = require("./routes/RestSearchCollections");

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

app.use("/", RestSchemas);
app.use("/", RestCollections);
app.use("/", RestSearchCollections);



app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

//fileToDb();
fileToDb_inOne();

const csvFileToDb = require('./methode/csvFileToDb');
// csvFileToDb();
