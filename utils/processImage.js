/* Author: Sotiris Konstantis */

const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');
const { processedImages } = require("../constants/processedImages");

const processImage = async (imagePath, points) => {
    try {
        const image = await Jimp.read(imagePath);
        const dotColor = 0x000000FF; 
        const dotRadius = 3; 

        const drawDot = (image, centerX, centerY, radius, color) => {
            for (let x = -radius; x <= radius; x++) {
                for (let y = -radius; y <= radius; y++) {
                    if (x * x + y * y <= radius * radius) {
                        image.setPixelColor(color, centerX + x, centerY + y);
                    }
                }
            }
        };

        for (let i = 0; i < points.length; i++) {
            let point = points[i];
            drawDot(image, point.x, point.y, dotRadius, dotColor);
        }

        const baseName = path.basename(imagePath);
        const ext = path.extname(imagePath);
        const name = baseName.replace(ext, '');

        const processedName = `${name}${ext}`;

        if (!fs.existsSync(processedImages)) 
            fs.mkdirSync(processedImages, { recursive: true });

        const processedPath = path.join(processedImages, processedName);
        await image.writeAsync(processedPath);
    } catch (error) {
        console.error('Error processing image:', error);
    }
}

module.exports = processImage;