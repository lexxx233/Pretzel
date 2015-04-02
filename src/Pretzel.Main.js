/**
 * Pretzel - by @lexxx233 (github)
 * Page - http://lexxx233.github.io/Pretzel/
 */
var Pretzel = {};

Pretzel.Style = require('./Pretzel.Style.js');
Pretzel.Global = require('./Pretzel.Global.js');
Pretzel.Structure = require('./Pretzel.Structure.js');
Pretzel.Bag = require('./Pretzel.Bag.js');
Pretzel.Viewer = require('./Pretzel.Viewer.js');

var initPretzel = function () {
    window.Pretzel = Pretzel;
};

if (window.addEventListener) {
    window.addEventListener('load', initPretzel, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initPretzel);
} else {
    window.onload = initPretzel;
}