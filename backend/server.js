const express = require("express");
const app = express();
const mongodb = require("./db/connect");
const port = process.env.PORT || 3000;

app.get("/", require("../routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Example app listening on port ${port}`);
  }
});
