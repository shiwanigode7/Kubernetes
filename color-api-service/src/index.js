const express = require("express");
const os = require("os");

const app = express();
const port = 80;
const color = "blue";
const hostName = os.hostname();

app.get("/", (req, res) => {
  res.send(`<h1 style="color:${color};">Hello from color-api!</h1>
    <h2>HostName: ${hostName}</h2>`);
});

app.get("/api", (req, res) => {
  const { format } = req.query; // localhost/api?format=text
  if (format == "json") {
    return res.json({
      color,
      hostName,
    });
  } else {
    return res.send(`COLOR: ${color}, HOSTNAME: ${hostName}`);
  }
});

app.listen(port, () => {
  console.log(`Color API listening on port: ${port}`);
});
