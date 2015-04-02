[**Pretzel**](https://github.com/lexxx233/Pretzel.JS) is a lightweight javascript library for visualizing/interacting with 3D folded linear structures (i.e chromosome). **Pretzel** is intended to simplify and/or eliminate the need to manually control representation, interaction, and simulation with folded linear structures.
___
####Quick Start
Simply source pretzel into your html
create a 'div' with unique id
```html
    <html>
        <head>
            <script src="pretzel.js"></script>
        </head>
        <body>
            <div id="canvasId"></div>
        </body>
    <html>
```
Begin by creating a viewer port for an existing <div> element. Multiple view ports can be created on the same page
```javascript
    window.onload = function(){
        var viewer = new Pretzel.Viewer("canvasId");
        viewer.init(); //init has to be called to setup the scene.
    }
```
Instantiate a chromosome (linear structure) Object
```javascript
    var bag = new PRETZEL.Bag(); //Bagging as way to put structures into collections
    var chromosome = new PRETZEL.Chromosome("chr1");
    chromosome.setLength(122300);
    chromosome.randStructure(100)
    bag.add(chromosome);
```
The structures or collection of structure can be rendered with viewer's APIs
```javascript
    viewer.viewBag(bag)
    //Alternatively individual chromosome can be rendered - viewer.viewChromosome(chromosome)
```
Add all sort of information (sugar) on top of the rendered structures
```javascript
    //Specify the region of interest to add information
    var info = new PRETZEL.ChromosomeDecorator(bag.getChromosome("chr1"), 4000, 12000);
    var decoratorBag = new PRETZEL.Bag();
    decoratorBag.add(info);
    viewer.viewBag(decoratorBag);
```
Setup any type of interactors which facilitate interactions with the 3D Structures. Several default
```javascript
    viewer.InteractorFactory('mapInteractor');
```
Use default behavior or hook new functionality for behavior for the interactors
```javascript
    alert();
```
