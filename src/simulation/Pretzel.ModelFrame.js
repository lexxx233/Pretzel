var THREE = require('../../lib/three.min.js');
var Util = require('../core/Pretzel.Utilities.js');

/**
 *
 * @param zMin
 * @param zMax
 * @param incre
 * @param _xFunc
 * @param _yFunc
 * @constructor
 */
var ModelFrame = function (zMin, zMax, incre, _xFunc, _yFunc) {
    this.zVals = [];

    for (var z = zMin; z < zMax; z += incre) {
        this.zVals.push(z);
    }
    ;

    this.xFunc = (typeof _xFunc === "undefined") ? null : _xFunc;
    this.yFunc = (typeof _yFunc === "undefined") ? null : _yFunc;
};

ModelFrame.prototype = {
    constructor: ModelFrame,

    /**
     *
     * @param xFunc
     */
    setXFunc: function (xFunc) {
        this.xFunc = xFunc;
    },

    /**
     *
     * @param yFunc
     */
    setYFunc: function (yFunc) {
        this.yFunc = yFunc;
    },

    /**
     *
     * @returns {*}
     */
    generateModel: function () {
        var anchors = [];

        if (this.xFunc == null || this.yFunc == null) {
            console.error("check modeling functions, returned null");
            return null;
        }
        else {
            for (var i = 0; i < this.zVals.length; i++) {
                var xTemp = this.xFunc(this.zVals[i]);
                var yTemp = this.yFunc(this.zVals[i]);
                anchors.push(new THREE.Vector3(xTemp, yTemp, this.zVals[i]));
            }
        }
        return anchors;
    },

    generateMatrix: function (anchors) {
        var m = new Array(anchors.length);
        for (var i = 0; i < anchors.length; i++) {
            m[i] = new Array(anchors.length);
            for (var j = 0; j < anchors.length; j++) {
                m[i][j] = Util.dist(anchors[i], anchors[j]);
            }
        }
        return m;
    }


};

module.exports = ModelFrame;