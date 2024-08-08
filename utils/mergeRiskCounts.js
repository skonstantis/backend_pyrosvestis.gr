/* Author: Sotiris Konstantis */

const mergeRiskCounts = (totalRiskCounts, newRiskCounts) => {
  Object.keys(newRiskCounts).forEach((id) => {
    if (!totalRiskCounts[id]) {
      totalRiskCounts[id] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    }
    [1, 2, 3, 4].forEach((risk) => {
      if (!totalRiskCounts[id][risk]) {
        totalRiskCounts[id][risk] = 0;
      }
      totalRiskCounts[id][risk] += newRiskCounts[id][risk];
    });
  });
};

module.exports = mergeRiskCounts;