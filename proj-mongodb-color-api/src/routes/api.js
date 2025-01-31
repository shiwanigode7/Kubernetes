
const express = require("express");
const apiRouter = express.Router();
const { getColor, getHostName } = require('../utils');

apiRouter.get("/", (req, res) => {
    const { format } = req.query; // localhost/api?format=text

    const color = getColor();
    const hostName = getHostName();
    
    if (format == "json") {
      return res.json({
        color,
        hostName,
      });
    } else {
      return res.send(`COLOR: ${color}, HOSTNAME: ${hostName}`);
    }
  });

  module.exports = {
    apiRouter,
  };