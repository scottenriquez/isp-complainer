var SpeedTest = require('speedtest-net');
var Promise = require('promise');

module.exports = {
	run: function() {
		return new Promise(function(fulfill, reject) {
			test = SpeedTest({maxTime: 5000});
			test.on('data', function(data) {
			  fulfill(data);
			});
			test.on('error', function(err) {
			  fulfill(err);
			});
		});
	}
}
