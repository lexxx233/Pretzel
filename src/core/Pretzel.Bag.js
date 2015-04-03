Bag = function () {
    this.structures = {};
};

Bag.prototype = {
    constructor: Bag,

    /**
     *
     * @param structure {Structure}
     */
    add: function (structure) {
        this.structures[structure.getId()] = structure;
    },

    /**
     *
     * Remove structure with a given id
     * @param id {String}
     */
    rm: function (id) {
        delete this.structures[id];
    },

    /**
     * @param id {String}
     * @returns {Structure}
     */
    getStructure: function (id) {
        return this.structures[id];
    },

    /**
     * Reset Bag to empty
     * @this {Bag}
     */
    emptyBag: function () {
        this.structures = {};
    },

    /**
     * Check if Bag is empty
     * @returns {boolean}
     */
    isEmpty: function () {
        return (this.structures.len === 0);
    }
};

module.exports = Bag;
