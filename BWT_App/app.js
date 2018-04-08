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
const tweetStream = twit.stream('statuses/filter', {track: ['football', 'javascript']});
const msg = fs.createWriteStream(__dirname + '/tweetMsg.txt'); // Saving to a file

// On tweet
tweetStream.on('tweet',  (tweet) => {
    msg.write(`screen_name: ${tweet.user.screen_name}  
    text:  ${tweet.text}`); // Selecting the parameters to save
    console.log(`screen_name: ${tweet.user.screen_name}
        text: ${tweet.text}
        
        `); // Output to console
    app.get('/', (req, res) =>{
        res.send(`${tweet.user.screen_name}  :  ${tweet.text}`);
    }); // Output to Server
});

// Adding Server port
const port=3000, hostname='127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

