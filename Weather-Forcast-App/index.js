const request = require('request');
const argv = require('yargs').argv;
const nconf = require('nconf');


nconf.argv().file({file: __dirname + '/config'});

let apiKey = nconf.get("API_KEY");
let cityName = argv.city || 'kiel';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

request(url, (err, response, body) => {
    if(err){
        console.log('error:', err);
    } else {
       let weather = JSON.parse(body)
       let message = `It's ${weather.main} degrees in ${weather.name}!`;
       console.log(message);
        console.log(message);
    }
});