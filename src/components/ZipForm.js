import React from 'react';

class ZipForm extends React.Component {
    

render() { 
    return ( 
        <div className="zip-form">
        <form>
            <label htmlFor="zipcode">Zip Code</label>
            <input className="form-control" type="input" name="zipcode" />
            <button type="button" className="btn btn-success">
            Get The Forecast!</button>
        </form>

        </div>
     );
}
}

 
export default ZipForm;