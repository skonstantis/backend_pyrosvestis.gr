/* Author: Sotiris Konstantis */

const fs = require("fs").promises;
const path = require("path");
const dataDir = require("../constants/dataDir");
const errorLogger = require("./errorLogger");

const initializeSeasonFile = async (year) => {
  try {
    const fileName = `season${year}.json`;
    const filePath = path.join(dataDir, fileName);

    try {
      await fs.access(filePath);
      return;
    } catch {
    }

    const startDate = new Date(year, 4, 2);
    const endDate = new Date(year, 10, 2);

    const entries = [];

    for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0]; 

      const entry = {
        date: dateStr,
        entries: []
      };

      entries.push(entry);
    }

    const jsonContent = JSON.stringify(entries, null, 2);

    await fs.writeFile(filePath, jsonContent, "utf8");
  } catch (error) {
    console.error(`Error initializing the JSON file for season ${year}:`, error);
    errorLogger();
    process.exit(1);
  }
};

module.exports = initializeSeasonFile;
