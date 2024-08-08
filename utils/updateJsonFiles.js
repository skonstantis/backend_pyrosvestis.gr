/* Author: Sotiris Konstantis */
/* Author: Sotiris Konstantis */

const fs = require("fs");
const path = require("path");
const initializeSeasonFile = require("./initializeSeasonFile");
const dataDir = require("../constants/dataDir");
const statsDir = require("../constants/statsDir");
const mergeRiskCounts = require("./mergeRiskCounts");
const mergeMaxRiskCounts = require("./mergeMaxRiskCounts");
const countRisksForDate = require("./countRisksForDate");
const countMaxRisksForDate = require("./countMaxRisksForDate");

const updateJsonFiles = async (filename, entries) => {
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})\.(jpg|png|gif)$/);

  const date = dateMatch[1];
  const year = date.split("-")[0];

  const seasonFileName = `season${year}.json`;
  const seasonFilePath = path.join(dataDir, seasonFileName);

  if (!fs.existsSync(seasonFilePath)) await initializeSeasonFile(year);

  const risks = entries.map((item) => item.risk);
  const maxRisk = risks.length > 0 ? Math.max(...risks) : -1;

  const content = {
    date: date,
    entries: entries,
    maxRisk: maxRisk,
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

  const riskCount = countRisksForDate(entries);
  const maxRiskCount = countMaxRisksForDate(maxRisk);

  const riskCountPath = path.join(statsDir, "risks.json");
  const maxRiskCountPath = path.join(statsDir, "total_risks.json");

  let totalRiskCounts = {};
  let totalMaxRiskCounts = {};

  if (fs.existsSync(riskCountPath)) {
    totalRiskCounts = JSON.parse(fs.readFileSync(riskCountPath, "utf8"));
  }

  if (fs.existsSync(maxRiskCountPath)) {
    totalMaxRiskCounts = JSON.parse(fs.readFileSync(maxRiskCountPath, "utf8"));
  }

  mergeRiskCounts(totalRiskCounts, riskCount);
  mergeMaxRiskCounts(totalMaxRiskCounts, maxRiskCount);

  fs.writeFileSync(riskCountPath, JSON.stringify(totalRiskCounts, null, 2), "utf-8");
  fs.writeFileSync(maxRiskCountPath, JSON.stringify(totalMaxRiskCounts, null, 2), "utf-8");
};

module.exports = updateJsonFiles;