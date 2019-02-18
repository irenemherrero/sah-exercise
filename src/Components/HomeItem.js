import React, { Component } from 'react';

class HomeItem extends Component {
    render() { 
        const{
            photoUrls,
            title,
            pricePerMonth,
        }=this.props.property;
        
        return ( 
            <div className="main__results-item-wrapper">
                <div className="main__results-img">
                    <img src={photoUrls.homecard} alt={title}/>
                </div>
                <div className="main__results-data">
                    <div className="main__results-description">
                        <p>{title}</p>
                    </div>
                    <div className="main__results-side-wrapper">
                        <h4>{pricePerMonth}€</h4>
                        <div className="main__results-btn-wrapper">
                            <button className="btn btn--info">More details</button>
                            <button className="btn btn--success">Book now!</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HomeItem;