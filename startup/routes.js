const express = require("express");

module.exports = function (app) {
  app.use(
    express.urlencoded({
      extended: false,
    })
  );

  // Body Parser
  app.use(express.json());


  app.use("/api/employee", require("../routes/api/employee"));
};
