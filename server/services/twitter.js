var Twitter = require('twitter');
var Promise = require('promise');

module.exports = {
	complain: function() {
		return new Promise(function(fulfill, reject) {
      var client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
      });
      client.post('statuses/update', {status: 'Greetings from Node.js!'},  function(error, tweet, response){
        if(error) throw error;
        fulfill(response);
      });
		});
	}
}
