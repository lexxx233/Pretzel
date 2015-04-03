The foremost and primary goal of pretzel is to create a portable and functional webGL visualization framework for 3D linear structures (i.e. biological chromosome). The library also provide a wide variety of utilities to interact with, examine, and simulate the structures in close details. 
___
#### Spin some demos > 

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
```javascript
    window.onload = function(){
        var viewer = new Pretzel.Viewer("canvasId");
        viewer.init(); //init has to be called to setup the scene.
        //Remember multiple view ports can be created on the same page as long as they have their own unique Id
    }
```
Instantiate a structure Object
```javascript
    ...
    var bag = new Pretzel.Bag(); //Bagging as way to put structures into collections
    var structure = new Pretzel.Structure("chr1");
    structure.setLength(122300);
    structure.randStructure(100)
    bag.add(structure);
    ...
```
Individual structure or bags of structure can be rendered with viewer's APIs
```javascript
    ...
    viewer.viewBag(bag)
    //Alternatively individual structure can be rendered - viewer.viewStructure(structure)
    ...
```
All sort of information (sugar) can be added on top of the rendered structures
```javascript
    ...
    //Specify the region of interest to add information
    var info = new PRETZEL.ChromosomeDecorator(bag.getChromosome("chr1"), 4000, 12000);
    var decoratorBag = new PRETZEL.Bag();
    decoratorBag.add(info);
    viewer.viewBag(decoratorBag);
    ...
```
##### Interaction
Setup any type of interactors which facilitate interactions with the 3D Structures. Several default
```javascript
    viewer.InteractorFactory('mapInteractor');
```
Use default behavior or hook new functionality for behavior for the interactors
```javascript
    alert();
```
##### Simulation

### Authors and Contributors
The project is developed and maintained by Thanh Le (@lexxx233)

### Support & Contact
Having trouble? Check out the documentation at https://help.github.com/pages or contact pretzeljsproject@gmail.com . You can also donate to future development of software like this [here](#)
