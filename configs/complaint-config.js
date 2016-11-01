module.exports = {
    tweetBody: function(promisedSpeed, actualSpeed, ispHandle) {
        return ispHandle + ' I pay for ' + promisedSpeed + 'mbps down, but am getting ' + actualSpeed + 'mbps.';
    ispHandle: function() {
        return '@cableONE';
    },
    promisedSpeed: function() {
        return 150.0;
    },
    threshold: function() {
        return 80.0;
    }
}
