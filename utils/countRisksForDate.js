/* Author: Sotiris Konstantis */

const countRisksForDate = (entries) => {
  const riskCount = {};

  entries.forEach((e) => {
    if (!riskCount[e.id]) {
      riskCount[e.id] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    }
    if (!riskCount[e.id][e.risk]) {
      riskCount[e.id][e.risk] = 0;
    }
    riskCount[e.id][e.risk] += 1;
  });

  return riskCount;
};

module.exports = countRisksForDate;
