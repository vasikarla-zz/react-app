


import React from 'react';

import { CarRow } from './car-row';

export class CarTable extends React.Component {

  deleteCar = (car) => {
    this.props.onDeleteCar(car);
  }

  render() {
     return <table border="2">
      <thead>
        <tr bgcolor="cyan">
          <td>Make</td>
          <td>Model</td>
          <td>Year</td>
          <td>Color</td>
          <td>Price</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {this.props.cars.map(car => <CarRow onDeleteCar={this.deleteCar} car={car} />)}
      </tbody>
      </table>;
  }
}