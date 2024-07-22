/* Author: Sotiris Konstantis */

const searchImage = require("./searchImage");
const { url_const, url_extensions } = require("../constants/urls");

async function searchImages(date) {
  const promises = [
    () => searchImage(date, url_extensions[0], true, false, false,  "", "", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "", "", ""),
    () => searchImage(date, url_extensions[1], false, false, false,  "", "", ""),
    () => searchImage(date, url_extensions[1], false, true, false,  "", "", ""),
    () => searchImage(date, url_extensions[2], false, false, false,  "", "", ""),
    () => searchImage(date, url_extensions[2], true, false, false,  "", "", ""),
    () => searchImage(date, url_extensions[1], false, false, false,  "_1", "", ""),
    () => searchImage(date, url_extensions[1], false, false, false,  "_0", "", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "_0", "", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "_1", "", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "_2", "", ""),
    () => searchImage(date, url_extensions[0], true, false, true, "", "", ""),
    () => searchImage(date, url_extensions[2], false, false, false,  "", "0", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "", "0", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "", "", "0"),
    () => searchImage(date, url_extensions[0], false, false, false,  "", "20", ""),
    () => searchImage(date, url_extensions[2], false, false, false,  "_0", "", "00"),
    () => searchImage(date, url_extensions[0], false, false, false,  "_0", "2023-04/", ""),
    () => searchImage(date, url_extensions[0], false, false, false,  "", "2023-04/", ""),
  ];

  for (let promise of promises) {
    const result = await promise();
    if (result.downloaded) {
      return {
        found: true,
        filepath: result.filepath,
        filename: result.filename,
      };
    }
  }

  const results = await Promise.all(promises.map((p) => p()));
  const unsuccessfulResults = results.filter((result) => !result.downloaded);
  const messages = unsuccessfulResults.map((result) => result.message);
  const existsMessage = messages.filter((message) =>
    message.toLowerCase().includes("exists")
  );

  if (existsMessage.length !== 0) 
    return { found: false, message: existsMessage[0] };
  else 
    return { found: false, message: unsuccessfulResults[0]?.message };
}

module.exports = searchImages;