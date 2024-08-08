/* Author: Sotiris Konstantis */

const mergeMaxRiskCounts = (totalMaxRiskCounts, newMaxRiskCounts) => {
  Object.keys(newMaxRiskCounts).forEach((risk) => {
    if (!totalMaxRiskCounts[risk]) {
      totalMaxRiskCounts[risk] = 0;
    }
    totalMaxRiskCounts[risk] += newMaxRiskCounts[risk];
  });
};

module.exports = mergeMaxRiskCounts;
