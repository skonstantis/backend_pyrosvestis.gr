/* Author: Sotiris Konstantis */

const isColor = (rgba, colorRanges) => {
  const { r, g, b } = rgba;
  for (const [color, range] of Object.entries(colorRanges)) {
    if (
      r >= range.r[0] &&
      r <= range.r[1] &&
      g >= range.g[0] &&
      g <= range.g[1] &&
      b >= range.b[0] &&
      b <= range.b[1]
    ) {
      return color;
    }
  }
  return null;
};

module.exports = isColor;