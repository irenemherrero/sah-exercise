import React, { Component } from 'react';
import Filters from './Filters';
import HomeList from './HomeList';
import ErrorPage from './ErrorPage';

class Main extends Component {
    render() { 
        const{
            propertiesToPrint,
            handleSelectPrice,
            sortPriceValue,
            handleSelectType,
            typeToFilter,
            errorInFetch,
            handleSelectNew,
            isNew
        }=this.props;

        return (
            <main className="main">
                <Filters
                    handleSelectPrice={handleSelectPrice}
                    sortPriceValue={sortPriceValue}
                    handleSelectType={handleSelectType}
                    typeToFilter={typeToFilter}
                    handleSelectNew={handleSelectNew}
                    isNew={isNew}
                />
                {errorInFetch === false
                    ?   <HomeList
                            propertiesToPrint={propertiesToPrint} 
                        />
                    :   <ErrorPage/>
                }
            </main>
         );
    }
}
 
export default Main;