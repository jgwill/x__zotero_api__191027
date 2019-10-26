//
var conf = require("./config.json");

const myapi = require('zotero-api-client')(conf.apikey).library('user', conf.uid);



var collection = "78ENCAGS"; //item : Volumetric clouds in the VR movie, <i>Allumette</i>
var userId = 180474; //jgwill

//Use the api to make the request (we're using async functions)
const response = await api().library('user', userId).collections(collection).items().get();


//Extract items from the response
const items = response.getData();

//
console.log(items.map(i => i.title));
