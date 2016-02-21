var Config = require('../configs/');
var Services = require('../services');
var Promise = require('promise');

module.exports = {
        run: function() {
                return new Promise(function(fulfill, reject) {
                        Services.speedtest.run().done(function(data) {
                                var promisedSpeed = Config.complaintConfig.promisedSpeed();
                                var actualSpeed = data.speeds.download;
                                var thresholdPercentage = Config.complaintConfig.threshold();
                                if(thresholdPercentage < 0 || thresholdPercentage > 100) {
                                        thresholdPercentage = 100.0;
                                }
                                if(actualSpeed < promisedSpeed * thresholdPercentage) {
                                        Services.twitter.complain(actualSpeed).done(function(response) {
                                                fulfill({
                                                        downloadSpeed: actualSpeed,
                                                        uploadSpeed: data.speeds.upload,
                                                        ipAddress: data.client.ip,
                                                        testLocation: data.server.location,
                                                        distance: data.server.distance,
                                                        ping: data.server.ping,
                                                        twitterPostResponseCode: response.statusCode
                                                });
                                        });
                                }
                                else {
                                        fulfill({
                                                downloadSpeed: actualSpeed,
                                                uploadSpeed: data.speeds.upload,
                                                ipAddress: data.client.ip,
                                                testLocation: data.server.location,
                                                distance: data.server.distance,
                                                ping: data.server.ping,
                                                twitterPostResponseCode: 'Tweet not required'
                                        });
                                }
                        });
                });
        }
}
