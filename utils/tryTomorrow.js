/* Author: Sotiris Konstantis */

const fs = require("fs").promises;
const searchImages = require("./searchImages");
const analyzeImage = require("./analyzeImage");
const analyzeReadyDateImage = require("./analyzeReadyDateImage");
const findAreas = require("./findAreas");
const readyDates = require("../arrays/readyDates");
const errorLogger = require("./errorLogger");
const dataDir = require("../constants/dataDir");
const { exec } = require("child_process");
const { exit } = require("process");

async function tryToday() {
  const now = new Date();
  const date = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  date.setDate(date.getDate() + 1);

  const month = date.getUTCMonth();

  if (month >= 10 || month <= 3) return true;

  const { found, filepath, filename, message } = await searchImages(date);

  try {
    const dateString = date.toISOString().slice(0, 10);

    if (found) {
      console.log(`TOMORROW'S IMAGE FOUND`);

      if (readyDates.includes(dateString))
        await analyzeReadyDateImage(dateString);
      else await analyzeImage(filepath, filename, findAreas(date));

      await publishChangesToGithub(dataDir);

      exit(0);
    } else {
      if (message.includes("exists")) {
        console.log(message);
        return true;
      } else {
        if (readyDates.includes(dateString)) {
          await analyzeReadyDateImage(dateString);
          return true;
        } else {
          console.log(`TOMORROW'S IMAGE NOT FOUND`);
          return false;
        }
      }
    }
  } catch (error) {
    if (found) {
      try {
        await fs.unlink(filepath);
      } catch (err) {
        console.error("Error deleting the image file:", err);
        errorLogger();
        process.exit(1);
      }
    }
    console.error(error);
  }
}

async function publishChangesToGithub(directory) {
  return new Promise((resolve, reject) => {
    exec(`cd ${directory} && git add .`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error adding changes: ${stderr}`);
        reject(err);
        return;
      }
      exec(`cd ${directory} && git commit -m "Automated commit of dataDir changes"`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error committing changes: ${stderr}`);
          reject(err);
          return;
        }
        exec(`cd ${directory} && git push`, (err, stdout, stderr) => {
          if (err) {
            console.error(`Error pushing changes: ${stderr}`);
            reject(err);
            return;
          }
          console.log("Changes pushed to GitHub successfully.");
          resolve(true);
        });
      });
    });
  });
}

module.exports = tryToday;