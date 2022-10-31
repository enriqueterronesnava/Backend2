const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Sara Rocha");
});

module.exports = routes;
