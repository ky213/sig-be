const fileToDb = require("./methode/fileToDb");
const fileToDb_inOne = require("./methode/fileToDb_inOne");

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

var cors = require("cors");

const app = express();

// connection to db
mongoose
  .connect("mongodb://localhost:27017/sig-eadn")
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

const RestUpload = require("./routes/RestUpload");
// settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// routes
app.use("/sig-backend", RestDjezzyRoutes);
app.use("/sig-backend", RestAlgeriePoste);
app.use("/sig-backend", RestOoredoo);
app.use("/sig-backend", RestLTE);
app.use("/sig-backend", RestMSAN);
app.use("/sig-backend", RestLFO);

app.use("/sig-backend", RestSchemas);
app.use("/sig-backend", RestCollections);
app.use("/sig-backend", RestSearchCollections);

app.use("/sig-backend", RestUpload);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

//fileToDb();
// fileToDb_inOne();

const csvFileToDb = require("./methode/csvFileToDb");
// csvFileToDb();
