/* Author: Sotiris Konstantis */

const isColor = require("./isColor");
const directions = require("../constants/directions");
const colorRanges = require("./colorRanges");

const checkNeighbors = (x, y, data, width, height, channels, maxLayers = 4) => {  

    for (let layer = 1; layer <= maxLayers; layer++) {
      const expandedDirections = [];
      for (const [dx, dy] of directions) {
        expandedDirections.push([dx * layer, dy * layer]);
      }
  
      for (const [dx, dy] of expandedDirections) {
        const newX = x + dx;
        const newY = y + dy;
  
        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
          const index = (newY * width + newX) * channels;
  
          const rgba = {
            r: data[index],
            g: data[index + 1],
            b: data[index + 2],
            a: channels === 4 ? data[index + 3] : 255,
          };
  
          if (isColor(rgba, colorRanges)) {
            return { x: newX, y: newY };
          }
        }
      }
    }
  
    return null;
  };

module.exports = checkNeighbors;