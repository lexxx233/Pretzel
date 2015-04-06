The foremost and primary goal of pretzel is to create a portable and functional webGL visualization framework for 3D linear structures (i.e. biological chromosome). The library also provide a wide variety of utilities to interact with, examine, and simulate the structures in close details. 
___
[![multiview](http://bx.psu.edu/~thanh/multiview_demo.png)](http://bx.psu.edu/~thanh/example/multiview.html)
[![decorator](http://bx.psu.edu/~thanh/decorator_demo.png)](http://bx.psu.edu/~thanh/example/decorator.html)
[![simulation](http://bx.psu.edu/~thanh/simulation_demo.png)](http://bx.psu.edu/~thanh/example/simulator.html)
[![query](http://bx.psu.edu/~thanh/query_demo.png)](http://bx.psu.edu/~thanh/example/#)
[![interaction](http://bx.psu.edu/~thanh/interaction_demo.png)](http://bx.psu.edu/~thanh/#)
___
#### Features
_**No pesky plugins**_ | Self-contained, portable, with reasonable footprint, Pretzel works with all browsers out of the box

_**Simplified, non-compromising abstraction**_ | Pretzel takes manual manipulation of coordinates out of the equation without compromising customizability when you want it. Give pretzel the starting coordinates of the structures, things will be taken care of automagically

_**Intuitive APIs**_ | It takes under 3 minutes to get started and be productive. [**Detail documentation**](www.google.com) is provided 

_**Parametric simulation**_ | With different noise models (Gaussian, Laplacian, Uniform), visualization, and free parameters for any simulation and data generation need

_**Visual query**_ | Pretzel provides a visual mean to create AJAX query

_**Flexible and extensible**_ | Hook any function to the existing framework and you are ready to have a completely new interactor, noise model, or any other functionalities. Integrate seamlessly into your existing workflow
___
###Quick Start

##### Visualization
Simply source pretzel into your html then create a div element with an unique id
```html
    <html>
        <head>
            <script src="pretzel.js"></script>
        </head>
        <body>
            <div id="canvasId" width="500" height="500"></div>
        </body>
    <html>
```
Begin by creating a viewer port for using the div element Id. 
As many viewport can be created as long as they possess unique Ids
```javascript
    window.onload = function(){
        var viewer = new Pretzel.Viewer("canvasId");
        ...
        Pretzel.startViewer(viewer1) // Rendering begin when startViewer routine is called
    }
```
Instantiate a structure Object
```javascript
    ...
    var structure = new Pretzel.Structure();
    structure.setLength(122300);
    structure.randStructure(100); //This function creates a random structure with 100 joints
    ...
```
Individual structure or bags of structure can be rendered with viewer's APIs
```javascript
    ...
    viewer.viewStructure(structure);
    //Pretzel.Bag is an API to put many structures into collection to manipulate and view all at the same time
    ...
```
##### Decoration
All sort of information can be added on top of the rendered structures
```javascript
    ...
    //Create a Decorator Factory which will produce one of 3 decorator type
    var segmentFactory = new Pretzel.DecoratorFactory(Pretzel.DecoratorFactory.TYPE.SEGMENT_DECORATOR);
    //3 types of decorator
    // SEGMENT_DECORATOR
    // POINT_DECORATOR
    // ASSOCIATION_DECORATOR
    // After creating the decorator factory, you can crank out as many decorator of this type as you wish
    var hid = segmentFactory.makeDecorator(hi, new Pretzel.Style(3.5, 0x00ff00, 1), 25, 75);
    //You can then view individual decorator or add it to Bags
    viewer1.viewDecorator(hid);
    ...
```
##### Simulation
Begin by seting up a frame for your model, deciding your functions to model structure
```javascript
     var xFunc = function (z) {return Math.sin(z) * 30;};
     var yFunc = function (z) {return Math.cos(z) * 30;};
     var sm = new Pretzel.ModelFrame(0, 60, 3.14 / 4, xFunc, yFunc);
```
Apply the model on a structure
```javascript
    var structure = new Pretzel.Structure();
    structure.setAnchors(sm.generateModel());
```
##### Visual Query

##### Interaction

### Authors and Contributors
The project is developed and maintained by Thanh Le (@lexxx233)

### Support and Contact
Having trouble? Check out the documentation at https://help.github.com/pages or contact pretzeljsproject@gmail.com . You can also donate to future development of software like this [here](#)
