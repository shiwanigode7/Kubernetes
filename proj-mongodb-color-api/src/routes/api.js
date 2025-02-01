const express = require("express");
const { getHostName } = require("../utils");
const { getColor, getColors, saveColor, deleteColor } = require("../db/color");

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  const { format, colorKey } = req.query; // localhost?format=text&colorKey='primary'

  const color = await getColor({ key: colorKey });
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

apiRouter.get("/color", async (req, res) => {
  const colors = await getColors();
  return res.send({ data: colors });
});

apiRouter.get("/color/:key", async (req, res) => {
  const { key } = req.params;
  const color = await getColor({ key, strict: true });

  if (!color) {
    return res.sendStatus(404);
  } else {
    return res.send({ data: color });
  }
});

apiRouter.post("/color/:key", async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;
  await saveColor({ key, value });

  return res.status(201).send({ data: { key, value }});
});

apiRouter.delete("/color/:key", async (req, res) => {
  const { key } = req.params;

  await deleteColor({ key });

  return res.sendStatus(204);
});

module.exports = {
  apiRouter,
};
