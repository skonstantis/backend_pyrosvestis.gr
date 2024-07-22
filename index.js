/* Author: Sotiris Konstantis */

const build = require("./utils/build");
const getNoDays = require("./utils/getNoDays");

(async () => {
  try {
    const noOfDays = getNoDays();

    await build(noOfDays, 5);

    process.exit(0);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
})();
