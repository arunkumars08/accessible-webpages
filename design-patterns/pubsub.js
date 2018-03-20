// Pub Sub pattern

var pubsub = {};

(function (q) {

    var topics = {};
    var subId = -1;

    // Publish
    q.publish = function(topic, config) {
        if(!topics[topic]) {
            return false;
        }

        var subscribers = topics[topic];
        var len = subscribers ? subscribers.length : 0;

        for(var i = 0; i < len; ++ i) {
            subscribers[i].execute(topic, config);
        }

        return this;
    };

    // Subscribe
    q.subscribe = function(topic, callback) {
        if(!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subId).toString();

        topics.push({
            token: token,
            execute: callback
        });

        return token;
    };

    // Unsubscribe
    q.unsubscribe = function(token) {
        for (var t in topics) {
            if (topics[t]) {
                for (var i = 0, j = topics[t].length; i < j; ++ i) {
                    if (topics[t][i].token === token) {
                        topics[t].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };

})(pubsub);
