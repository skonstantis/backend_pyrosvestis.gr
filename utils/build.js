/* Author: Sotiris Konstantis */

const fs = require("fs").promises; 
const searchImages = require("./searchImages");
const analyzeImage = require("./analyzeImage");
const analyzeReadyDateImage = require("./analyzeReadyDateImage");
const findAreas = require("./findAreas");
const readyDates = require("../arrays/readyDates");
const errorLogger = require("./errorLogger");

async function build(noOfDays, delay = 0) {
  let retry = 0;
  
  for (let i = noOfDays - 2, count = 1; i > -2; i--, count++) {
    console.clear();
    console.log(`Iteration ${count} of ${noOfDays} (${((count / noOfDays) * 100).toFixed(2)}% done)`);

    const now = new Date();
    const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));    
    date.setDate(date.getDate() - i);

    console.log("PROCESSING DATE " + date.toISOString().split('T')[0]);

    const month = date.getUTCMonth();

    if (month >= 10 || month <= 3) 
      continue;

    const { found, filepath, filename, message } = await searchImages(date);

    try {
      const dateString = date.toISOString().slice(0, 10);
    
      if (found) {
        console.log(`IMAGE FOUND`);
        
        if (readyDates.includes(dateString)) await analyzeReadyDateImage(dateString);
        else await analyzeImage(filepath, filename, findAreas(date));
        
      } else {
        if (message.includes("exists")) 
        {
          console.log(message);
          continue;
        }
         else {
          if (readyDates.includes(dateString)) {
            await analyzeReadyDateImage(dateString);
          } else {
            console.log(`IMAGE NOT FOUND`);
          }
        }
      }
      
      await new Promise((resolve) => setTimeout(resolve, delay * 1000));
    } catch (error) {
      if(retry >= 10)
      {
        errorLogger();
        process.exit(1);      
      }

      if (found) {
        try {
          await fs.unlink(filepath);
        } catch (err) {
          console.error("Error deleting the image file:", err);
          errorLogger();
          process.exit(1);
        }
      }
      i++;
      count--;
      retry++;
      console.error(error);
      continue;
    }
    retry = 0;
  }    
  console.clear();
  console.log("THE BUILD HAS BEEN COMLETED");
}

module.exports = build;