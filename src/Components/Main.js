import React, { Component } from 'react';
import Filters from './Filters';
import HomeList from './HomeList';
import ErrorPage from './ErrorPage';
import NoResults from './NoResults';

class Main extends Component {
    render() { 
        const{
            propertiesToPrint,
            handleSelectPrice,
            sortPriceValue,
            handleSelectType,
            typeToFilter,
            errorInFetch,
            handleCity,
            cityFromInput,
            handleFetch,
            noResults,
        }=this.props;
        console.log(noResults);
        return (
            <main className="main">
                <Filters
                    handleSelectPrice={handleSelectPrice}
                    sortPriceValue={sortPriceValue}
                    handleSelectType={handleSelectType}
                    typeToFilter={typeToFilter}
                    handleCity={handleCity}
                    cityFromInput={cityFromInput}
                    handleFetch={handleFetch}
                />
                {errorInFetch === false
                    ?   !noResults
                            ?   <HomeList
                                propertiesToPrint={propertiesToPrint}/>
                            :   <NoResults/>
                    :   <ErrorPage/>
                }
            </main>
         );
    }
}
 
export default Main;