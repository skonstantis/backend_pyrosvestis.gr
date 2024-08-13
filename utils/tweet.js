/* Author: Sotiris Konstantis */

const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_APP_KEY,
    appSecret: process.env.TWITTER_APP_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

async function tweet(text) {
    try {
        await client.v2.tweet(text);
    } catch (error) {
        console.error('Error posting tweet:', error);
    }
}

module.exports = tweet;
