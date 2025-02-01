const express = require("express");
const { getHostName } = require("../utils");
const { getColor } = require("../db/color");

const rootRouter = express.Router();

rootRouter.get("/", async (req, res) => {
  const { colorKey } = req.query;

  const color = await getColor({ key: colorKey });
  const hostName = getHostName();

  res.send(`<h1 style="color:${color};">Hello from color-api!</h1>
      <h2>HostName: ${hostName}</h2>`);
});

module.exports = {
  rootRouter,
};
