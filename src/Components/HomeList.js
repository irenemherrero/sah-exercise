import React, { Component } from 'react';
import HomeItem from './HomeItem';
import Loading from './Loading';

class HomeList extends Component {
    render() { 
        const{
            propertiesToPrint,
        }=this.props;
        
        return ( 
            <div className="main__results">
                {propertiesToPrint.length > 0
                    ?   <ul>
                            {propertiesToPrint.map( (property, index) => {
                                return(
                                    <li className="main__results-item" key={index}>
                                        <HomeItem
                                            property={property}
                                        />
                                    </li>
                                )
                            })} 
                        </ul>
                    :   <Loading/>
                }
            </div>
        )
    }
}
 
export default HomeList;