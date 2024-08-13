/* Author: Sotiris Konstantis */

const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

async function tweetWithImage(filePath, tweetText) {
  try {
    const imageData = await fs.readFile(filePath);

    const mediaId = await client.v1.uploadMedia(imageData, {
      mimeType: 'image/png',
    });

    await client.v2.tweet(tweetText, {
      media: {
        media_ids: [mediaId],
      },
    });
  } catch (error) {
    console.error('Error uploading image to Twitter:', error);
  }
}

module.exports = tweetWithImage;