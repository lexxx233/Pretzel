var THREE = require('../../lib/three.min.js')

var Style = function (_r, _color, _opacity) {
    this.r = _r;
    this.opacity = _opacity;
    this.material = new THREE.MeshLambertMaterial({color: _color});
    this.material.transparent = true;
    this.material.opacity = this.opacity;
};

Style.prototype = {
    constructor: Style,

    /**
     *
     * @returns {number|*}
     */
    getRadius: function () {
        return this.r;
    },

    /**
     *
     * @returns {number|*}
     */
    getOpacity: function () {
        return this.opacity;
    },

    /**
     *
     * @returns {THREE.MeshPhongMaterial|*}
     */
    getMaterial: function () {
        return this.material;
    },

    /**
     *
     * @param _r {number}
     */
    setRadius: function (_r) {
        this.r = _r;
    },

    /**
     *
     * @param _alpha {number}
     */
    setOpacity: function (_alpha) {
        this.opacity = _alpha;
    },

    /**
     *
     * @param _color {THREE.color}
     */
    setMaterial: function (_color) {
        this.material = new _.THREE.MeshPhongMaterial({color: _color});
    }
};

module.exports = Style;
