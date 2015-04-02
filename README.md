[**Pretzel**](http://lexxx233.github.io/Pretzel/) is a lightweight javascript library for visualizing/interacting with 3D folded linear structures (i.e chromosome). **Pretzel** is intended to simplify and eliminate the need to laboriously control visual representation, interaction, and simulation with folded linear structures.
___
####Quick Start

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