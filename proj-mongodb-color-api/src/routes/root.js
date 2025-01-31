const express = require("express");
const rootRouter = express.Router();
const { getColor, getHostName } = require("../utils");

rootRouter.get("/", (req, res) => {
  const color = getColor();
  const hostName = getHostName();
  res.send(`<h1 style="color:${color};">Hello from color-api!</h1>
      <h2>HostName: ${hostName}</h2>`);
});

module.exports = {
    rootRouter
}