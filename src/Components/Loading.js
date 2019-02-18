import React, { Component } from 'react';
import Spinner from '../Images/spinner.gif'

class Loading extends Component {
    render() { 
        return ( 
            <div className="main__results-spinner">
                <img  
                    src={Spinner} 
                    alt='Cargando...'
                />
            </div>
         );
    }
}
 
export default Loading;