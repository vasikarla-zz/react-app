import * as React from 'react';
import {ToolHeader} from './tool-header';
import {CarTable} from './car-table';

export class CarTool extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cars: props.cars.concat(),   
            carModel: '',
            carName: '',
            carYear:'',
            carColor:'',
            carPrice:''
        };

        // this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveCar = (e) => {
        this.setState({
            cars: this.state.cars.concat({
                carMake: this.state.carMake, 
                carModel: this.state.carModel,
                year: this.state.carYear,
                carColor: this.state.carColor,
                carPrice: this.state.carPrice 
            }),
            carMake: "", 
            carModel: "",
            year: "",
            carColor: "",
            carPrice: "" 
        });
    }

    render() {
        return <div >
                    <ToolHeader headerText="Car Tool Header"/>
                    <table border="1" >
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
                            {this.state.cars.map (cars => <tr> 
                                <td>{cars.carMake}</td> 
                                <td>{cars.carModel}</td> 
                                <td>{cars.year}</td> 
                                <td>{cars.carColor}</td> 
                                <td>{cars.carPrice}</td> 
                                </tr> 
                                )}                             
                        </tbody>                        
                    </table> 
                    <form broder="2">
                    <fieldset width="2px">
                    <legend>Car Tool Form</legend>
                        <div>
                            <label htmlFor="car-name">Car Make :</label>
                            <select id-="car-make" 
                                   name= "carMake"
                                   value={this.state.carMake} 
                                   onChange={this.onChange}>
                            <option value="Volvo">Volvo</option>
                            <option value="Saab">Saab</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                        </select>                                      
                        </div>        
                        <div>
                            <label htmlFor="car-model">Car Model :</label>
                                <select id-="car-model" 
                                   name= "carModel"
                                   value={this.state.carModel} 
                                   onChange={this.onChange}>
                                    <option value="xc90">XC90</option>
                                    <option value="95">95</option>
                                    <option value="slk">SLK</option>
                                    <option value="tt">TT</option>
                                </select>                                     
                        </div>                           
                        <div>
                            <label htmlFor="car-year">Car Year :</label>
                            <input type="date" id-="car-year" 
                                   name= "carYear"
                                   value={this.state.carYear} 
                                   onChange={this.onChange}/>
                        </div>                           
                        <div>
                            <label htmlFor="car-color">Car Color :</label>
                                <select onChange={this.onChange} name= "carColor"
                                   value={this.state.carColor} id-="car-color">
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                </select>                                     
                        </div>       
                        <div>
                            <label htmlFor="car-price">Car Price :</label>
                            <input type="text" id-="car-price" 
                                   name= "carPrice"
                                   value={this.state.carPrice} 
                                   onChange={this.onChange}
                                   />
                        </div>   
                      
                        <div>
                            <button type="button" onClick={this.saveCar}>Save Car</button>                                        
                        </div>        
                        </fieldset>                                                                                
                    </form>                    
                </div>
    }
}