console.log("bot is running");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var tweet = { 
	status: '#codingrainbow from node.js!!!' 
}

//
//  tweet ''
//
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
	if(err) {
		console.log("Something went wrong");
	} else {
		console.log("It worked!");
	}
}