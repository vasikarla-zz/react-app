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
    { id: 1, make: 'Chevrolet', model: 'Volt', year: 2016, color: 'blue', price: 45000 },
    { id: 2, make: 'Chevrolet', model: 'Bolt', year: 2017, color: 'red', price: 34000 },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, color: 'orange', price: 55000 },
    { id: 4, make: 'Chevrolet', model: 'Volt', year: 2016, color: 'blue', price: 45000 },
    { id: 5, make: 'Chevrolet', model: 'Bolt', year: 2017, color: 'red', price: 34000 },
    { id: 6, make: 'Ford', model: 'Fusion', year: 2018, color: 'orange', price: 55000 }, 
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