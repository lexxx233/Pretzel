/**
 * Pretzel - by @lexxx233 (github)
 * Page - http://lexxx233.github.io/Pretzel/
 */
var Pretzel = {VERSION: "0.0.1"};

Pretzel.Style = require('./Pretzel.Style.js');
Pretzel.Global = require('./Pretzel.Global.js');
Pretzel.Structure = require('./Pretzel.Structure.js');
Pretzel.Bag = require('./Pretzel.Bag.js');
Pretzel.Viewer = require('./Pretzel.Viewer.js');
Pretzel.Utilities = require('./Pretzel.Utilities.js');
Pretzel.StructureDecorator = require('./Pretzel.StructureDecorator.js');
Pretzel.StructureInteractor = require('./Pretzel.StructureInteractor.js');
Pretzel.StructureSimulator = require('./Pretzel.StructureSimulator.js');
Pretzel.startViewer = require('./Pretzel.Task.js');

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