console.log("bot is running");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = { 
	q: 'rainbow', 
	count: 2 
}

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for(var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}