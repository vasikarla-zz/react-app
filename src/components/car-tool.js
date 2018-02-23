import React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import {CarForm} from './car-form';
import * as PropTypes from 'prop-types';

export class CarTool extends React.Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {cars: props.cars.concat()};
  }

  onChange = e => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  };

  onClick = () => {
    this.setState({
      cars: this.state.cars.concat({
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        color: this.state.color,
        price: this.state.price
      }),
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',      
    })
  };

  saveCar = (newCar) => {
    this.setState({ cars: this.state.cars.concat(newCar) });
  }

  deleteCar = (car) => {
    this.setState({ cars: this.state.cars.filter(c => c !== car)});
  }

  render() {
    console.log("Rendering Car Tool...");
    return <div>
        <ToolHeader headerText="Car Tool" />
        <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar}/>
        <CarForm onSubmitCar={this.saveCar} />
    </div>;
  }


}