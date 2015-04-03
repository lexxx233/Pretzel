/**
 * Pretzel - by @lexxx233 (github)
 * Page - http://lexxx233.github.io/Pretzel/
 */
var Pretzel = {VERSION: "0.0.1"};

Pretzel.Style = require('./core/Pretzel.Style.js');
Pretzel.Global = require('./core/Pretzel.Global.js');
Pretzel.Structure = require('./core/Pretzel.Structure.js');
Pretzel.Bag = require('./core/Pretzel.Bag.js');
Pretzel.Viewer = require('./visualization/Pretzel.Viewer.js');
Pretzel.Utilities = require('./core/Pretzel.Utilities.js');
Pretzel.DecoratorFactory = require('./visualization/Pretzel.DecoratorFactory.js');
Pretzel.SegmentDecorator = require('./visualization/Pretzel.SegmentDecorator.js');
Pretzel.PointDecorator = require('./visualization/Pretzel.PointDecorator.js');
Pretzel.AssociationDecorator = require('./visualization/Pretzel.AssociationDecorator.js');
Pretzel.StructureInteractor = require('./interaction/Pretzel.StructureInteractor.js');
Pretzel.ModelFrame = require('./simulation/Pretzel.ModelFrame.js');
Pretzel.NoiseFrame = require('./simulation/Pretzel.NoiseFrame.js');
Pretzel.StructureSimulator = require('./simulation/Pretzel.StructureSimulator.js');
Pretzel.startViewer = require('./core/Pretzel.Task.js');

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