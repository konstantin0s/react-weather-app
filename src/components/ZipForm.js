import React from 'react';

class ZipForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: ''
        };

        this.inputUpdated = this.inputUpdated.bind(this);
    }
    
    

    inputUpdated(e) {
        const { value } = e.target;

        this.setState({ zipcode: value });
    }

render() { 
    return ( 
        <div className="zip-form">
        <form>
            <label htmlFor="zipcode">Zip Code</label>
            <input value={this.state.zipcode} onInput={this.inputUpdated} className="form-control" type="input" name="zipcode" />
            <button type="button" className="btn btn-success">
            Get The Forecast!</button>
        </form>

        </div>
     );
}
}

 
export default ZipForm;