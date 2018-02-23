import React from 'react';

export class CarRow extends React.Component {

  deleteCar = () => {
    this.props.onDeleteCar(this.props.car);
  };

  render() {
      // const car = this.props.CarRow;
    return <tr>
      <td>{this.props.car.make}</td>
      <td>{this.props.car.model}</td>
      <td>{this.props.car.year}</td>
      <td>{this.props.car.color}</td>
      <td>{this.props.car.price}</td>
      <td><button onClick={this.deleteCar}>Delete</button></td>
    </tr>;
  }


}



export const ToolHeader = props => 
    <header>
        <h1>{props.headerText}</h1>
    </header>