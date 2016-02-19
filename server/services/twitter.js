var Twitter = require('twitter');
var Promise = require('promise');
var Config = require('../configs/');

module.exports = {
	complain: function() {
		return new Promise(function(fulfill, reject) {
      var client = new Twitter({
        consumer_key: Config.twitterAPIConfig.twitterConsumerKey(),
        consumer_secret: Config.twitterAPIConfig.twitterConsumerSecret(),
        access_token_key: Config.twitterAPIConfig.twitterAccessTokenKey(),
        access_token_secret: Config.twitterAPIConfig.twitterAccessTokenSecret()
      });
      client.post('statuses/update', {status: 'My API keys are obfuscated...'},  function(error, tweet, response){
        if(error) throw error;
        fulfill(response);
      });
		});
	}
}
