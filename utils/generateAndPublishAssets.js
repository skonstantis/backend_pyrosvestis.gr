/* Author: Sotiris Konstantis */

const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const sharp = require("sharp");
const Levels = require("../classes/Levels");
const Locations = require("../classes/Locations");
const Types = require("../classes/Types");
const Colors = require("../classes/Colors");
const tweetWithImage = require("./tweetWithImage");
const tweet = require("./tweet");

async function generateAndPublishAssets(locationId, levelId, date) {
  const year = parseInt(date.split("-")[0]);
  const month = parseInt(date.split("-")[1]);
  const day = parseInt(date.split("-")[2]);

  const fill = levelId == 4 ? '"#1E1E1E"' : '"white"';
  const fillText = levelId == 4 ? '"white"' : '"#1E1E1E"';
  const stroke = levelId == 4 ? "white" : "#1E1E1E";

  const svgstart =
    '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n';
  const background = '\t<rect width="1920" height="1080" fill=' + fill + "/>\n";
  const dateText =
    '\t<text x="960" y="85" fill=' +
    fillText +
    ' font-size="60" font-weight="bolder" font-family="Arial" text-anchor="middle" dominant-baseline="alphabetic">' +
    new Date(date.split("-").join("-")).toLocaleDateString("el-GR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    "</text>\n";

  const locationText =
    '\t<text x="960" y="190" fill=' +
    fillText +
    ' font-size="60" font-weight="bolder" font-family="Arial" text-anchor="middle" dominant-baseline="alphabetic">' +
    new Types().items.get(new Locations().items.get(locationId).type) +
    " " +
    new Locations().items.get(locationId).name +
    "</text>\n";

  const levelText =
    '\t<text x="960" y="960" fill=' +
    fillText +
    ' font-size="100" font-weight="bolder" font-family="Arial" text-anchor="middle" dominant-baseline="alphabetic">' +
    new Levels().items.get(levelId) +
    "</text>\n";

  const attribution =
    '\t<text x="20" y="1060" fill=' +
    fillText +
    ' font-size="30" font-family="Arial" text-anchor="start" dominant-baseline="alphabetic"> © pyrosvestis.gr - Αντιπυρική Περίοδος ' +
    year +
    " - All Rights Reserved " +
    "</text>\n";
  const svgend = "</svg>\n";
  const datePath = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const folderPath = path.join(__dirname, "../assets/x/svgs/daily/", datePath);

  try {
    try {
      await fs.access(folderPath);
    } catch (e) {
      await fs.mkdir(folderPath, { recursive: true });
    }

    const filePath = "./assets/x/svgs/daily/" + datePath + "/" + locationId;
    const fileName = ".svg";
    const pngFileName = ".png";
    const locationPath = "./assets/x/svgs/locations/" + locationId + ".svg";

    const locationSvg = await fs.readFile(locationPath, "utf8");

    const { window } = new JSDOM(locationSvg);
    const document = window.document;
    const svgElement = document.querySelector("svg");
    const locationWidth = parseFloat(svgElement.getAttribute("width"));
    const locationHeight = parseFloat(svgElement.getAttribute("height"));

    const elementsWithFill = document.querySelectorAll("[fill]");
    elementsWithFill.forEach((element) => {
      element.setAttribute("fill", new Colors().items.get(levelId));
    });

    const elementsWithStroke = document.querySelectorAll("[stroke]");
    elementsWithStroke.forEach((element) => {
      element.setAttribute("stroke", stroke);
    });

    const modifiedLocationSvg = svgElement.outerHTML;

    const containerWidth = 1920;
    const containerHeight = 1080;
    const marginTop = 250;
    const marginBottom = 250;
    const marginLeft = 100;
    const marginRight = 100;
    const availableWidth = containerWidth - marginLeft - marginRight;
    const availableHeight = containerHeight - marginTop - marginBottom;

    const scaleX = availableWidth / locationWidth;
    const scaleY = availableHeight / locationHeight;
    const scale = Math.min(scaleX, scaleY);

    const newWidth = locationWidth * scale;
    const newHeight = locationHeight * scale;

    const offsetX = (availableWidth - newWidth) / 2 + marginLeft;
    const offsetY = (availableHeight - newHeight) / 2 + marginTop;

    const scaledLocationSvg = modifiedLocationSvg.replace(
      /<svg[^>]*>/,
      `<svg width="${newWidth}" height="${newHeight}" viewBox="0 0 ${locationWidth} ${locationHeight}" xmlns="http://www.w3.org/2000/svg">`
    );

    const transformedLocationSvg = scaledLocationSvg.replace(
      /<svg/,
      `<svg x="${offsetX}" y="${offsetY}"`
    );

    const fullSvgContent =
      svgstart +
      background +
      dateText +
      locationText +
      levelText +
      transformedLocationSvg +
      attribution +
      svgend;

    await fs.writeFile(filePath + fileName, fullSvgContent);

    await sharp(Buffer.from(fullSvgContent))
      .png()
      .toFile(filePath + pngFileName);

    const isTomorrow = date =>
      new Date().setHours(0, 0, 0, 0) === new Date(date.split('-').join('-')).setHours(0, 0, 0, 0) - 86400000;

    const tweetText = (levelId == 4 ? "🚨🚨🚨 " : (levelId == 3 ? "⚠️⚠️⚠️ " : "")) + new Levels().items.get(levelId) + 
    (levelId != 4 ? " κίνδυνος εκδήλωσης και εξάπλωσης πυρκαγιάς" : "") +  
    " κηρύχθηκε από την πολιτική προστασία για" +
    (levelId == 4 ? " κίνδυνο εκδήλωσης και εξάπλωσης πυρκαγιάς για" : "") + 
    (isTomorrow(date) ? " αύριο " : " σήμερα ") +
    new Date(date.split("-").join("-")).toLocaleDateString("el-GR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) + 
    (new Types().items.get(new Locations().items.get(locationId).type) == "Δασαρχείο" ? " στο " : " στην ") +
    new Types().items.get(new Locations().items.get(locationId).type) +
    " " +
    new Locations().items.get(locationId).name + ".\n\nΓια περισσότερες πληροφορίες, pyrosvestis.gr\n\n"  +
    "\n\n#πυρκαγιά #φωτιά";

    if(levelId >= 4)
      await tweetWithImage(filePath + pngFileName, tweetText);
    //await tweet(tweetText);
  } catch (err) {
    console.error("Error processing SVG:", err);
  }
}

module.exports = generateAndPublishAssets;
