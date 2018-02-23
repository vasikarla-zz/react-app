import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ColorTool} from './components/color-tools';
import {CarTool} from './components/car-tool';

 // const colors = ['Blue', 'Red', 'Green'];
 const colorList = [{
    id: 1,
    name : "Blue",
    hexCode : "00000FF"
},
{
    id: 2,
    name : "Red",
    hexCode : "0000RRF"
},
{
    id: 3,
    name : "Green",
    hexCode : "00000TTF"
}];


const carList = [
    {
        carMake: "Audi", 
        carModel: "Q7", 
        year: 2015, 
        carColor: "Black", 
        carPrice: 60000
    },
    {
        carMake: "Chevy", 
        carModel: "Bolt", 
        year: 2015, 
        carColor: "Grey", 
        carPrice: 40000
    },
    {
        carMake: "BMW", 
        carModel: "i3", 
        year: 2015, 
        carColor: "Black", 
        carPrice: 70000
    }            
];

ReactDOM.render(
    <div>
        <header>
            <ColorTool colors={colorList}/>
            <CarTool cars={carList}/>
        </header>
    </div>,
        document.querySelector("#root")
    );