var THREE = require('../../lib/three.min.js');


/**
 *
 * @param structure {Pretzel.Structure}
 * @param _start {Integer}
 * @param _style {Pretzel.Style}
 * @constructor
 */
var PointDecorator = function (structure, _start, _style) {
    this.type = 1;
    this.structure = structure;
    this.start_cor = _start;
    this.style = (typeof _style === "undefined") ? Global.DEFAULT_STYLE : _style;
    this.Anchors = [];
    this._getPoint();
};

PointDecorator.prototype = {
    constructor: PointDecorator,

    /**
     *
     */
    getStyle: function () {
        return this.style;
    },
    /**
     *
     * @returns {Array}
     */
    getAnchors: function () {
        return this.Anchors;
    },

    /**
     *
     * @private
     */
    _getPoint: function () {
        var numSeg = this.structure.getAnchors().length - 1;
        var segLen = this.structure.getLength() / numSeg;

        var wstart = Math.floor(this.start_cor / segLen);
        var mstart = (this.start_cor / segLen) % 1;

        var pStart = this._getPointLocation(this.structure.getAnchors()[wstart], this.structure.getAnchors()[wstart + 1], mstart);
        this.Anchors.push(pStart);
    },

    /**
     *
     * @param v1 {THREE.Vector3}
     * @param v2 {THREE.Vector3}
     * @param distance_to_v1 {Float} this is always between 0-1.
     * @private
     */
    _getPointLocation: function (v1, v2, distance_to_v1) {
        var tempX = v2.x - v1.x;
        var tempY = v2.y - v1.y;
        var tempZ = v2.z - v1.z;

        return new THREE.Vector3(v1.x + distance_to_v1 * tempX, v1.y + distance_to_v1 * tempY, v1.z + distance_to_v1 * tempZ);
    }
};

module.exports = PointDecorator;