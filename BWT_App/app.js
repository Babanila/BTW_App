// Importing the require dependencies module
const express = require('express');
const twitter = require('twit');
const nconf = require('nconf');
const fs = require('fs');


const app = express();
nconf.argv().file({file: __dirname + '/config.json'});

//Twitter details
const twit = new twitter({
    consumer_key: nconf.get('TWITTER_CONSUMER_KEY'),
    consumer_secret: nconf.get('TWITTER_CONSUMER_SECRET'),
    access_token: nconf.get('TWITTER_ACCESS_TOKEN'),
    access_token_secret: nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
});


// Attach to filter stream
//const tweetStream = twit.stream('statuses/sample');
const tweetStream = twit.stream('statuses/filter', {track: ['football', 'javascript']});

// On tweet
tweetStream.on('tweet', (tweet) => {
    console.log('-----------------------------------------------------------------------------------');
    console.log('screen_name:', tweet.user.screen_name);
    console.log('text:', tweet.text);
    console.log('');
    console.log('');
});

// Adding Server port
const port=3000, hostname='127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

