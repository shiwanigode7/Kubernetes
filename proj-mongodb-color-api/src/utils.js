const os = require("os");

const getHostName = () => os.hostname();

module.exports = {
    getHostName,
}