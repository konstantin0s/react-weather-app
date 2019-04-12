import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() { 
        return ( 
            <div className="app">
            <p>Oracletone rocks!!</p>
            </div>
         );
    }
}
 
export default App;

const root = document.getElementById('app-container');

ReactDOM.render(<App />, root);
