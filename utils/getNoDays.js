/* Author: Sotiris Konstantis */

const noOfDays = require("../constants/noOfDays");

const getNoDays = () => {

  if(noOfDays != 0)
    return noOfDays;
  
  const startDate = new Date(Date.UTC(2022, 9, 13)); 

  const now = new Date();

  const nowUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );

  const diffMilliseconds = nowUTC - startDate.getTime();

  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60  * 24));

  return diffDays + 2; 
};

module.exports = getNoDays;
