var THREE = require('../../lib/three.min.js');
var SegmentDecorator = require('./Pretzel.SegmentDecorator.js');
var PointDecorator = require('./Pretzel.PointDecorator.js');
var AssociationDecorator = require('./Pretzel.AssociationDecorator.js');


/**
 *
 * @param structure
 * @param _style
 * @param _type
 * @constructor
 */
var DecoratorFactory = function (_type) {
    this.type = (typeof _type === "undefined") ? 0 : _type;
};

DecoratorFactory.TYPE = {
    SEGMENT_DECORATOR: 0,
    POINT_DECORATOR: 1,
    ASSOCIATE_DECORATOR: 2
};


DecoratorFactory.prototype = {
    constructor: DecoratorFactory,

    /**
     *
     * @param structure
     * @param style
     * @param start
     * @param stop
     * @returns {*}
     */
    makeDecorator: function (structure, style, start, stop, structure2) {
        if (this.type == DecoratorFactory.TYPE.SEGMENT_DECORATOR) {
            return new SegmentDecorator(structure, start, stop, style);
        } else if (this.type == DecoratorFactory.TYPE.POINT_DECORATOR) {
            return new PointDecorator(structure, start, style);
        } else if (this.type == DecoratorFactory.TYPE.ASSOCIATE_DECORATOR) {
            return new AssociationDecorator(structure, start, structure2, stop);
        } else {
            console.error("Non-existent Decorator Type");
        }
    },

};

module.exports = DecoratorFactory;