var THREE = require('../../lib/three.min.js');

var Utilities = {};

/**
 *
 */
Utilities.dist = function (v1, v2) {
    return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2) + Math.pow(v1.z - v2.z, 2));
};


module.exports = Utilities;
