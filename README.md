# x__zotero_api__191027
An experimental repo to master Zotero API

## GLOBAL STATUS: Abandonned
* Too complex to master in the amount of time I have and I wont use it in the context of NodeJS but iOS workflow



## Using : npm install zotero --save  
### Status: IN PROGRESS
```js

var zotero = require('zotero');

var userId = 2134; //jgwill
var lib = zotero({ user: userId });

//... too complex
```

## Using : zotero-api-client  
### Status: FAILED
```js
const api = require('zotero-api-client');
var collection = "23423423"; //item : Volumetric clouds in the VR movie, <i>Allumette</i>
var userId = 34242343; //jgwill

//Use the api to make the request (we're using async functions)
const response = await api().library('user', userId).collections(collection).items().get();


//Extract items from the response
const items = response.getData();

//
console.log(items.map(i => i.title));

```