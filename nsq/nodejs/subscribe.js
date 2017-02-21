var nsq = require('nsq.js');

// subscribe

var reader = nsq.reader({
    nsqd: [':4150'],
    maxInFlight: 3,
    maxAttempts: 5,
    topic: 'tesevent',
    channel: 'ingestion'
});

reader.on('error', function(err){
    console.log(err.stack);
});

reader.on('message', function(msg){
    var body = msg.body.toString();
    console.log('giving up on %s', body);
    msg.finish();
    /*var body = msg.body.toString();
    console.log('%s attempts=%s', body, msg.attempts);
    msg.requeue(2000);*/
});

reader.on('discard', function(msg){
    var body = msg.body.toString();
    console.log('giving up on %s', body);
    msg.finish();
});

