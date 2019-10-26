var conf = require("./config.json");

var zotero = require('zotero');
var xml2js = require('xml2js').parseString;

var stream = new zotero.Stream({ apiKey: conf.apiKey });



stream.on('topicUpdated', function (data) {
    console.log(data.topic);
    console.log(data.version);
  });