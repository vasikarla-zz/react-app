import React from 'react';

export class CarForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          make: '',
          model: '',
          year: '',
          color: '',
          price: '',
          actions: ''
        };
      } 
    
      onChange = (e) => {
        this.setState({
          [ e.target.name ]: e.target.value
        });
      }

      submitCar = () => {
        console.log("Clicked");
        this.props.onSubmitCar({
              make: this.state.make,
              model: this.state.model,
              year: this.state.year,
              color: this.state.color,
              price: this.state.price,
        });
    
        this.setState({
            make: '',
            model: '',
            year: '',
            color: '',
            price: '',  
        });
    
      }  

  render() {
    return       <form>
    <div>
      <label htmlFor="make-input">Make:</label>
        <select type="text" id="make-input" name="make"
        value={this.state.make} onChange={this.onChange}>
            <option value="Volvo">Volvo</option>
            <option value="Saab">Saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
        </select>         
    </div>

    <div>
      <label htmlFor="model-input">Model:</label>
        <select id="model-input" name="model"
        value={this.state.model} onChange={this.onChange}>
            <option value="xc90">XC90</option>
            <option value="95">95</option>
            <option value="slk">SLK</option>
            <option value="tt">TT</option>
        </select>               
    </div>

    <div>
      <label htmlFor="year-input">Year:</label>
      <input type="text" id="year-input" name="year"
        value={this.state.year} onChange={this.onChange}  />
    </div>

    <div>
      <label htmlFor="color-input">Color:</label>
        <select type="text" id="color-input" name="color"
        value={this.state.color} onChange={this.onChange}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
        </select>               
    </div>

    <div>
      <label htmlFor="price-input">Price:</label>
      <input type="text" id="price-input" name="price"
        value={this.state.price} onChange={this.onChange}  />
    </div>

    <button type="button" onClick={this.submitCar}>Add Car</button>

  </form>  
  }


}