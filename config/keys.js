//keys.js - figure out what set of cridentials to return
if(process.env.NODE_ENV === 'production') {
    //in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // in dex - return dev keys
    module.exports = require('./dev');
}