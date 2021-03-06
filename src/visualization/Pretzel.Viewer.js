var THREE = require('../../lib/three.min.js');
THREE.OrbitControls = require('../../lib/OrbitControls.js');
var Style = require('./../core/Pretzel.Style.js');
var Stats = require('../../lib/stats.min.js');
var DecoratorFactory = require('./Pretzel.DecoratorFactory.js');

/**
 *
 * @param divId {String}
 * @constructor
 */
var Viewer = function (divId) {
    this.divId = divId;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.container = null;
    this.controls = null;
    this.clock = null;
    //this.stats = null;
    console.log(divId + " created")
};

Viewer.prototype = {
    constructor: Viewer,

    /**
     *
     * Init needs to be called before anything to setup the scene
     * This function setup scene, camera, renderer, container, controls, and stats
     */
    init: function () {
        //Main scene
        this.scene = new THREE.Scene();
        var SCREEN_WIDTH = document.getElementById(this.divId).clientWidth,
            SCREEN_HEIGHT = document.getElementById(this.divId).clientHeight;
        //Camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(-1000, 1000, 0);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        //Viewer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(0xffffff);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        // prepare container
        this.container = document.getElementById(this.divId);
        this.container.appendChild(this.renderer.domElement);

        //Orbit control
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);

        // prepare clock
        this.clock = new THREE.Clock();

        //FPS stats
        //this.stats = new Stats();
        //this.stats.domElement.style.position = 'absolute';
        //this.stats.domElement.style.bottom = '0px';
        //this.stats.domElement.style.zIndex = 10;
        //this.container.appendChild(this.stats.domElement);

        //Directional light
        var dLight = new THREE.DirectionalLight(0xffffff);
        dLight.position.set(1, 1000, 1);
        dLight.castShadow = true;
        dLight.shadowCameraVisible = false;
        dLight.shadowDarkness = 0.2;
        dLight.shadowMapWidth = dLight.shadowMapHeight = 1000;
        this.scene.add(dLight);


        // add simple ground
        //var groundGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
        var groundGeometry = new THREE.PlaneBufferGeometry(3000, 3000, 1, 1);
        var ground = new THREE.Mesh(groundGeometry, new THREE.MeshPhongMaterial({color: 0xefefef}));
        ground.position.y = -200;
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = false;
        this.scene.add(ground);
    },

    /**
     *
     * @param v1 {THREE.Vector3}
     * @param v2 {THREE.Vector3}
     * @param _style {Style}
     * @private
     */
    _renderTube: function (v1, v2, style) {
        var tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(v1, v2), 0, style.getRadius()), style.getMaterial());
        tube.castShadow = tube.receiveShadow = false;
        this.scene.add(tube);
    },

    /**
     *
     * @param v1 {THREE.Vector3{
     * @param _style {Style}
     * @private
     */
    _renderSphere: function (v1, style) {
        var sphere = new THREE.Mesh(new THREE.SphereGeometry(style.getRadius(), 7, 7), style.getMaterial());
        sphere.castShadow = sphere.receiveShadow = false;
        sphere.position.x = v1.x;
        sphere.position.y = v1.y;
        sphere.position.z = v1.z;
        this.scene.add(sphere);
    },

    /**
     *
     * @param v1
     * @param v2
     * @param style
     * @private
     */
    _renderLine: function (v1, v2, style) {
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(v1);
        lineGeometry.vertices.push(v2);
        var line = new THREE.Line(lineGeometry, style.material);
        this.scene.add(line);
    },

    /**
     *
     */
    update: function () {
        this.controls.update(this.clock.getDelta());

        //this.stats.update();
        // smoothly move the particleLight
        var timer = Date.now() * 0.000025;
        //particleLight.position.x = Math.sin(timer * 5) * 300;
        //particleLight.position.z = Math.cos(timer * 5) * 300;
    },

    /**
     *
     */
    render: function () {
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    },

    /**
     *
     */
    animate: function () {
        var a = this.animate();
        window.requestAnimationFrame(function () {
            a;
        });
        this.render();
        this.update();
    },

    /**
     *
     * @param structure {Pretzel.Structure}
     */
    viewStructure: function (structure) {
        var points = structure.getAnchors();

        for (var i = 0; i < points.length - 1; i++) {
            this._renderTube(points[i], points[i + 1], structure.getStyle());
            this._renderSphere(points[i], structure.getStyle());
        }
        this._renderSphere(points[points.length - 1], structure.getStyle());
    },

    /**
     *
     * @param decorator
     */
    viewDecorator: function (decorator) {
        if (decorator.type == DecoratorFactory.TYPE.SEGMENT_DECORATOR) {
            this.viewStructure(decorator);
        } else if (decorator.type == DecoratorFactory.TYPE.POINT_DECORATOR) {
            this._renderSphere(decorator.getAnchors()[0], decorator.style);
        } else if (decorator.type == DecoratorFactory.TYPE.ASSOCIATE_DECORATOR) {
            this._renderLine(decorator.getAnchors()[0], decorator.getAnchors()[1], decorator.getStyle());
        }
    },

    /**
     *
     * @param bag {Pretzel.Bag}
     */
    viewBag: function (bag) {

    },

    initializeVisual: function () {
        this.render();
        this.animate();
    }
};

module.exports = Viewer;