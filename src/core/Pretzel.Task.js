var viewers = [];

var animate = function () {
    requestAnimationFrame(animate);
    for (var i = 0; i < viewers.length; i++) {
        viewers[i].render();
        viewers[i].update();
    }
};

var startViewer = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (!( arguments[i] in viewers)) {
            viewers.push(arguments[i]);
        }
    }
    for (var i = 0; i < viewers.length; i++) {
        viewers[i].render();
    }
    animate();
};

var addViewer = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (!( arguments[i] in viewers)) {
            viewers.push(arguments[i]);
        }
    }
};

module.exports = startViewer;