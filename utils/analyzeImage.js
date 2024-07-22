/* Author: Sotiris Konstantis */

const analyzeImageData = require("./analyzeImageData");
const updateJsonFile = require("./updateJsonFile");

const analyzeImage = async (filepath, filename, areas) => {
  try {
    const entries = await analyzeImageData(filepath, areas);
    await updateJsonFile(filename, entries);
    console.log(`IMAGE ANALYZED`);
  } catch (error) {
    console.error(`Failed to analyze image ${filename}: ${error.message}`);
    throw new Error(error);
  }
};

module.exports = analyzeImage;
