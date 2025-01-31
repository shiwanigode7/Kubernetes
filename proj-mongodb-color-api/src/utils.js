const fs = require("fs");
const path = require("path");
const os = require("os");

const getColor = () => {
  let color = process.env.DEFAULT_COLOR;
  const filePath = process.env.COLOR_CONFIG_PATH;

  if (filePath) {
    try {
      const colorFromFile = fs.readFileSync(path.resolve(filePath), "utf8");
      color = colorFromFile.trim();
    } catch (error) {
      console.error(`failed to read content of ${filePath}`);
      console.error(error);
    }
  }
  return color || "blue";
};

const getHostName = () => os.hostname();

module.exports = {
    getColor,
    getHostName
}