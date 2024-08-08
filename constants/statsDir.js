/* Author: Sotiris Konstantis */

const path = require("path");

const dataDir = require("./dataDir");

const statsDir = path.join(dataDir, "stats");

module.exports = statsDir;