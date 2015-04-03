var THREE = require('../../lib/three.min.js');

var NoiseFrame = function (_type) {
    this.type = _type;
};

NoiseFrame.TYPE = {
    UNIFORM: 0,
    GAUSSIAN: 1
};

NoiseFrame.prototype = {

    constructor: NoiseFrame,

    addNoise: function (_m, _level) {

    },

    _createNoise: function (_miu, _sigma) {

    }

};

module.exports = NoiseFrame;