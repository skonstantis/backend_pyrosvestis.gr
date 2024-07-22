/* Author: Sotiris Konstantis */

const tryTomorrow = require("./utils/tryTomorrow");

const delayMinutes = 1;

var found = false;

(async () => {
  while (!found) {
      try {
        found = await tryTomorrow();
      } catch (error) {
        console.error("An error occurred:", error);
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, delayMinutes * 60 * 1000));
  }
})();
