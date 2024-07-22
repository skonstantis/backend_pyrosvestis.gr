/* Author: Sotiris Konstantis */

const axios = require("axios");
const fs = require("fs");
const errorLogger = require("./errorLogger");

const downloadImage = async (url, filepath, filename, retry=0) => {
  if (!fs.existsSync(filepath)) {
    try {
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      const writer = fs.createWriteStream(filepath);

      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on("finish", () => {
          resolve({downloaded: true, filepath: filepath, filename: filename});
        });
        writer.on("error", reject);
      });
    } catch (error) {
      if (!error.message.includes("404")) {
        if (retry <= 10) {
          console.error(`Failed to download image for date ${filename.replace(".jpg", "").replace(".gif", "").replace(".png", "")}: ${error.message}. Retrying...`)
          retry++;
          await new Promise((resolve) => setTimeout(resolve, retry * 1000));
          return downloadImage(url, filepath, filename, retry);
        } else {
          console.error(`Failed all attempts to download image for date ${filename.replace(".jpg", "").replace(".gif", "").replace(".png", "")}: ${error.message}`);
          errorLogger();
          process.exit(1);
        }
      }
      return new Promise((resolve, reject) => {
        resolve({downloaded: false, message: error.message});
      });
    }
  } else {
    return new Promise((resolve, reject) => {
      resolve({downloaded: false, message: "Image for date " + filename.replace(".jpg", "").replace(".gif", "") + " already exists"});
    });
  }
};

module.exports = downloadImage;
