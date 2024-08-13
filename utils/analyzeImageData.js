/* Author: Sotiris Konstantis */

const sharp = require("sharp");
const isColor = require("./isColor");
const checkNeighbors = require("./checkNeighbors");
const generateAndPublishAssets = require("./generateAndPublishAssets");
const processImage = require("./processImage");
const colorRanges = require("./colorRanges");
const colorTranslates = require("../constants/colorTranslates");

const analyzeImageData = async (filepath, areas, filename) => {
  const image = sharp(filepath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  let entries = [];
  let points = [];

  for (let i = 0; i < areas.items.length; i++) {
    const entry = areas.items[i];
    let x = entry.pixelX;
    let y = entry.pixelY;

    let found = false;
    let finalX = x;
    let finalY = y;
    while (!found) {
      const index = (y * info.width + x) * info.channels;

      const rgba = {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
        a: info.channels === 4 ? data[index + 3] : 255,
      };

      if (isColor(rgba, colorRanges)) {
        found = true;
        finalX = x;
        finalY = y;
      } else {
        const result = checkNeighbors(x, y, data, info.width, info.height, info.channels);
        if (result) {
          x = result.x;
          y = result.y;
        } else {
          found = true;
          console.error("Attention: null value detected in " + filepath);
        }
      }
    }

    if (found) {
      points.push({ x: finalX, y: finalY });

      const finalIndex = (finalY * info.width + finalX) * info.channels;
      const finalRgba = {
        r: data[finalIndex],
        g: data[finalIndex + 1],
        b: data[finalIndex + 2],
        a: info.channels === 4 ? data[finalIndex + 3] : 255,
      };
      const risk = colorTranslates[isColor(finalRgba, colorRanges)];

      const jsonEntry = {
        id: areas.items[i].location.id,
        risk: risk,
      };
      
      const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})\.(jpg|png|gif)$/);
      try
      {
          await generateAndPublishAssets(areas.items[i].location.id, risk, dateMatch[1]);
      }
      catch(e)
      {
        console.error(e);
      }

      entries.push(jsonEntry);
    }
  }

  await processImage(filepath, points);

  return entries;
};

module.exports = analyzeImageData;