const fs = require("fs").promises;
const { join } = require("path");
const errorLogger = require("./errorLogger");
const dataDir = require("../constants/dataDir");
const initializeSeasonFile = require("./initializeSeasonFile");
const path = require("path");

const analyzeReadyDateImage = async (date) => {
  try {
    const sourceFilePath = join(`./readyDateImages/${date}.json`);

    const year = date.split("-")[0];
  
    const seasonFileName = `season${year}.json`;
    const seasonFilePath = path.join(dataDir, seasonFileName);
    
    try {
      await fs.stat(seasonFilePath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await initializeSeasonFile(year);
      } else {
        throw error;
      }
    }

    const destFilePath = join(dataDir, seasonFileName);

    const data = await fs.readFile(sourceFilePath, "utf8");
    const entry = JSON.parse(data);

    let existingData = [];

    try {
      await fs.access(destFilePath);
      const existingFileContent = await fs.readFile(destFilePath, "utf8");
      existingData = existingFileContent ? JSON.parse(existingFileContent) : [];
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      existingData = [];
    }

    const entryIndex = existingData.findIndex(
      (e) => e.date === entry.date
    );

    if (entryIndex !== -1) {
      existingData[entryIndex] = entry;
    } else {
      existingData.push(entry);
    }

    await fs.writeFile(
      destFilePath,
      JSON.stringify(existingData, null, 2),
      "utf8"
    );

    console.log(`IMAGE ANALYZED AS READY - DATE: ${date}`);
  } catch (error) {
    console.error(
      `Failed to analyze ready date image for date ${date}: ${error.message}`
    );
    errorLogger();
    process.exit(1);
  }
};

module.exports = analyzeReadyDateImage;
