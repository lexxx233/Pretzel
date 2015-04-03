var THREE = require('../../lib/three.min.js');
var Global = require('../core/Pretzel.Global.js');

/**
 *
 * @param structure {Pretzel.Structure}
 * @param _start {Integer}
 * @param _stop {Integer}
 * @param _style {Pretzel.Style}
 * @param _type {Pretzel.AssociationDecorator.Type} Type of decorator
 * @constructor
 */
var AssociationDecorator = function (structure, _start, structure2, _stop) {
    this.type = 2;
    this.structure = structure;
    this.start_cor = _start;
    this.structure2 = structure2;
    this.stop_cor = _stop;
    this.style = this.makeAssociationStyle();
    this.Anchors = [];
    this._getAssociate();
};

AssociationDecorator.prototype = {
    constructor: AssociationDecorator,

    /**
     *
     */
    getStyle: function () {
        return this.style;
    },

    setStyle: function (_style) {
        this.style = _style;
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
    _getAssociate: function () {
        var numSeg = this.structure.getAnchors().length - 1;
        var segLen = this.structure.getLength() / numSeg;

        var wstart = Math.floor(this.start_cor / segLen);
        var mstart = (this.start_cor / segLen) % 1;


        var numSeg2 = this.structure2.getAnchors().length - 1;
        var segLen2 = this.structure2.getLength() / numSeg2;

        var wstop = Math.floor(this.stop_cor / segLen2);
        var mstop = (this.stop_cor / segLen2) % 1;

        var pStart = this._getPointLocation(this.structure.getAnchors()[wstart], this.structure.getAnchors()[wstart + 1], mstart);
        var pStop = this._getPointLocation(this.structure2.getAnchors()[wstop], this.structure2.getAnchors()[wstop + 1], mstop);

        this.Anchors.push(pStart);
        this.Anchors.push(pStop);
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
    },

    /**
     *
     * @param _color
     * @param _dashSize
     * @param _gapSize
     * @returns {*|DEFAULT_STYLE}
     */
    makeAssociationStyle: function (_color, _dashSize, _gapSize) {
        var tempStyle = Global.DEFAULT_STYLE;
        var tempcolor = (typeof _color === "undefined") ? 0xff0000 : _color;
        var tempDash = (typeof _dashSize === "undefined") ? 5 : _dashSize;
        var tempGap = (typeof _gapSize === "undefined") ? 3 : _gapSize;
        tempStyle.material = new THREE.LineDashedMaterial({color: tempcolor, dashSize: tempDash, gapSize: tempGap});

        return tempStyle;
    }
};

module.exports = AssociationDecorator;