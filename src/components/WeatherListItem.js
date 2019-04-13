import React, {Component} from 'react';

class WeatherListItem extends Component {

    render() { 

        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        
        return ( 
            <div className="wheater-list flex-parent">
                    <h1>{date.getMonth() + 1 } / { date.getDate() } </h1>
                    <h2> {day.temp.min.toFixed(2)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F </h2>
         </div>
        );
    }
}
 
export default WeatherListItem;