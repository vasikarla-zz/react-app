import * as React from "react";
import {CarRow} from './car-row';

export class CarTable extends React.Component{

    componentDidMount(){
        console.log(" Car Table Component Mounted");
        console.dir(this.props.cars);
    }
    render(){
        return  <table border="1" >
                    <thead> 
                        <tr bgcolor="cyan">
                        <th> Make</th> 
                        <th> Model</th> 
                        <th> Year</th> 
                        <th> Color</th> 
                        <th> Price </th> 
                        </tr> 
                    </thead>    
                    <tbody>
                        <CarRow cars={this.props.cars}/>
                        {this.props.cars.map (cars => <tr> 
                            <td>{cars.carMake}</td> 
                            <td>{cars.carModel}</td> 
                            <td>{cars.year}</td> 
                            <td>{cars.carColor}</td> 
                            <td>{cars.carPrice}</td> 
                            </tr> 
                            )}                             
                    </tbody>                        
                </table> 
    }
}