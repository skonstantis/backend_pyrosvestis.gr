/* Author: Sotiris Konstantis */

const fs = require("fs").promises;
const AsyncLock = require("async-lock");

const lock = new AsyncLock();

const appendFile = async (filePath, content) => {
  await lock.acquire('file', async function () {
    try {
      await fs.appendFile(filePath, content);
    } catch (err) {
      console.error('Error appending content to file:', err);
    }
  });
};

module.exports = appendFile;