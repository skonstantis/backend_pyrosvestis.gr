/* Author: Sotiris Konstantis */

const countMaxRisksForDate = (maxRisk) => {
  const maxRiskCount = {};

  if (maxRisk != -1) {
    maxRiskCount[maxRisk] = 1;
    maxRiskCount["total"] = 1;
  }

  return maxRiskCount;
};

module.exports = countMaxRisksForDate;
