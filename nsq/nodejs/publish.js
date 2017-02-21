var express = require('express')
var app = express()

var nsq = require('nsq.js');
var writer = nsq.writer(':4150');
writer.on('ready', function() {

    writer.publish('tesevent', '333');
    app.get('/', function (req, res) {
        writer.publish('tesevent', 'baru ');
        res.send('Hello World!')

    })

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })
});



// publish

/*
var writer = nsq.writer(':4150');

writer.on('ready', function() {
    writer.publish('tesevent', 'ganti 55555');
});*/
