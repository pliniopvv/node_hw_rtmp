const NodeMediaServer = require('node-media-server');
var express = require('express');

var app = express();
app.use('/', express.static(__dirname + "/public"));

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
app.listen(80, () => {
  console.log(`[Express] serving index on 80`);
});