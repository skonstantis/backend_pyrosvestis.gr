/* Author: Sotiris Konstantis */

const fs = require("fs");
const path = require("path");
const initializeSeasonFile = require("./initializeSeasonFile");
const dataDir = require("../constants/dataDir");

const updateJsonFile = async (filename, entries) => {
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})\.(jpg|png|gif)$/);

  const date = dateMatch[1];
  const year = date.split("-")[0];

  const seasonFileName = `season${year}.json`;
  const seasonFilePath = path.join(dataDir, seasonFileName);
  
  if (!fs.existsSync(seasonFilePath)) await initializeSeasonFile(year);

  const content = {
    date: date,
    entries: entries,
  };

  let existingData = [];


  const fileData = fs.readFileSync(seasonFilePath, "utf8");
  if (fileData) {
    try {
      existingData = JSON.parse(fileData);
    } catch (error) {
      console.error("Error parsing JSON file:", error.message);
      existingData = [];
    }
  }

  const entryIndex = existingData.findIndex(
    (entry) => entry.date === content.date
  );

  if (entryIndex !== -1) {
    existingData[entryIndex] = content;
  } else {
    existingData.push(content);
  }

  fs.writeFileSync(seasonFilePath, JSON.stringify(existingData, null, 2));
};

module.exports = updateJsonFile;
