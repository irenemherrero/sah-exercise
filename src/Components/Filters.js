import React, { Component } from 'react';

class Filters extends Component {
    render() {
        const{
            handleSelectPrice,
            sortPriceValue,
            handleSelectType,
            typeToFilter,
            handleCity,
            cityFromInput,
            handleFetch
        } = this.props;
         
        return (
            <div className="main__filters"> 
                <h2 className="main__filters-title">Filters:</h2>
                    <h3 className="main__filters-subtitle">Property type:</h3>
                        <input value={cityFromInput} name="" id="" onChange={handleCity} onKeyPress={handleFetch}></input>
                        <select value={typeToFilter} name="" id="" onChange={handleSelectType}>
                            <option value="" defaultChecked>All</option>
                            <option value="apartments">Apartments</option>
                            <option value="rooms">Rooms</option>
                            <option value="studios">Studios</option>
                            <option value="residences">Residences</option>
                        </select>    
                    <h3 className="main__filters-subtitle">Sort by price:</h3>
                        <select value={sortPriceValue} name="" id="" onChange={handleSelectPrice}>
                            <option value="ascending" defaultChecked>Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
            </div>
        );
    }
}
 
export default Filters;