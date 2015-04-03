var Global = require('./Pretzel.Global.js');
var THREE = require('../../lib/three.min.js');

Structure = function (id, _len, _style) {
    this.id = id;
    this.len = (typeof _len === "undefined") ? 100000 : _len;
    this.style = (typeof _style === "undefined") ? Global.DEFAULT_STYLE : _style;
    this.anchors = [];
};

Structure.prototype = {
    constructor: Structure,

    /**
     *
     * @returns {*}
     */
    getId: function () {
        return this.id;
    },

    /**
     *
     * @returns {number|*}
     */
    getLength: function () {
        return this.len;
    },

    /**
     *
     * @returns {Pretzel.Style|*}
     */
    getStyle: function () {
        return this.style;
    },

    /**
     *
     * @returns {Array|THREE.Vector3}
     */
    getAnchors: function () {
        return this.anchors;
    },

    /**
     *
     * @param _id
     */
    setId: function (_id) {
        this.id = _id;
    },

    /**
     *
     * @param _len
     */
    setLength: function (_len) {
        this.len = _len;
    },

    /**
     *
     * @param _style
     */
    setStyle: function (_style) {
        this.style = _style;
    },

    /**
     *
     * @param n
     */
    randStructure: function (n) {
        for (var i = 0; i < n; i++) {
            var randomX = Math.round(Math.random() * 500);
            var randomY = Math.round(Math.random() * 500);
            var randomZ = Math.round(Math.random() * 500);
            this.anchors.push(new THREE.Vector3(randomX, randomY, randomZ));
        }

        console.log("random structure generated");
    }
};

module.exports = Structure;