/* Author: Sotiris Konstantis */

const fs = require('fs');
const downloadImage = require("./downloadImage");
const { rawImages } = require("../constants/rawImages");
const { url_const, url_extensions } = require("../constants/urls");
const path = require("path");

async function searchImage(date, extension, isNew, elGr, isOdd, version, suffix, postfix) {
  return new Promise(async (resolve, reject) => {

    if (!fs.existsSync(rawImages)) 
      fs.mkdirSync(rawImages, { recursive: true });

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const url_new = isNew ? isOdd ?`${year}-${month - 1 < 10 ? "0" + (month - 1) : month - 1}/` : `${year}-${month < 10 ? "0" + month : month}/` : "";

    const url_var = `${year < 2010 ? (year - 2000).toString().padStart(2, '0') : (year - 2000).toString()}${
      month < 10 ? "0" + month : month
    }${day < 10 ? "0" + day : day}`;

    const url = `${url_const}${url_new}${suffix}${url_var}${postfix}${version}${elGr ? "_el_GR" : ""}${extension}`;

    const filename = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }${extension}`;
    const filepath = path.resolve(__dirname, "..", rawImages + filename);

    const {
      downloaded,
      filepath: dFilepath,
      filename: dFilename,
      message,
    } = await downloadImage(url, filepath, filename);

    if (downloaded)
      resolve({
        downloaded,
        filepath: dFilepath,
        filename: dFilename,
      });
    else
      resolve({
        downloaded,
        message,
      });
  });
}

module.exports = searchImage;
