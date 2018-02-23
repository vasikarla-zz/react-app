import * as React from 'react';

export class CarRow extends React.Component {

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

    componentDidMount(){
        console.log(" Car Row Component Mounted");
        console.dir(this.props.cars.map);
    }

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