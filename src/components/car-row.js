import * as React from 'react';

export class CarRow extends React.Component {

    render() {
        return <tr >
            <td>{this.props.cars.carMake} </td>  
            <td>{this.props.carModel}</td>
            <td>{this.props.year}</td>
            <td>{this.props.carColor}</td>
            <td>${this.props.carPrice}</td>
            </tr> 
    }
}