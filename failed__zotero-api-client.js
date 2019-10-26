//
var conf = require("./config.json");

const myapi = require('zotero-api-client')(conf.apikey).library('user', conf.uid);


const itemsResponse =  myapi.collections().get();

