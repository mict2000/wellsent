var shajs = require('sha.js')
 
var key = shajs('sha256').update('42').digest('hex');
console.log(key);
module.exports = key;