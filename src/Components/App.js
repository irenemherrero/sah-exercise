import React, { Component, Fragment } from 'react';
import Header from './Header';
import Main from './Main';

const numberResults = 30;
let fetchResults = [];
let fetchResultsDesc = [];
let citySearch;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        propertiesToPrint: [],
        propertiesFetch: [],
        propertiesPriceAsc: [],
        propertiesPriceDesc: [],
        sortPriceValue: "ascending",
        typeToFilter: "",
        errorInFetch: false,
     }
     this.getLocation = this.getLocation.bind(this);
     this.geoSuccess = this.geoSuccess.bind(this);
     this.geoError = this.geoError.bind(this);
     this.fetchData=this.fetchData.bind(this);
     this.handleSelectPrice = this.handleSelectPrice.bind(this);
     this.handleSelectType = this.handleSelectType.bind(this);
     this.removePreviousData = this.removePreviousData.bind(this);
  }
  
  componentDidMount(){
    //Geolocation functionality is not working well. Anyway, I decided to leave the code (functions below).

    this.getLocation();
  }

  getLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    } else {
        alert("Geolocation is not supported by this browser.");
        this.fetchData();
    }
  }

  geoSuccess(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&accept-language=es&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`)
    .then(response => response.json())
    .then(json => citySearch = json.address.city.toLowerCase())
    .then(()=> this.fetchData())
    .catch(error => {
      console.log('Error: ' + error)
      this.fetchData()});
  }

  geoError() {
    alert("Geocoder failed.");
    this.fetchData();
  }

  //Get data from fetch + save arrays of properties to print.

  fetchData(){
    console.log(this.state.typeToFilter);
    this.removePreviousData();
    fetch(`https://www.spotahome.com/api/public/listings/search/markers/${citySearch || 'madrid'}?type[]=${this.state.typeToFilter}`)
    .then(response => response.json())
    .then(json => {

      let jsonResults = json.data;
      for(var i = 0; i < numberResults; i++){
        
        fetch(`https://spotahome.com/api/public/listings/search/homecards_ids?ids%5B%5D=${jsonResults[i].id}&ids%5B%5D=${jsonResults[i].id}`)
        .then(response => response.json())
        .then(json => {

          fetchResults.push(json.data.homecards[0]);

          fetchResults.sort((a, b) =>{
            return a.pricePerMonth - b.pricePerMonth;
          });

          fetchResultsDesc = [...fetchResults];

          fetchResultsDesc.sort((b, a) =>{
            return a.pricePerMonth - b.pricePerMonth;
          });

          this.setState({
            propertiesToPrint: this.state.sortPriceValue === 'descending' ? fetchResultsDesc : fetchResults,
            propertiesFetch: fetchResults,
            propertiesPriceAsc: fetchResults,
            propertiesPriceDesc: fetchResultsDesc,
          })
        })
        .catch(() => this.setState({
          errorInFetch: true,
        }));
      }
    })
    .catch(() => this.setState({
      errorInFetch: true,
    }));
  }

  //Select list to print when selecting option "Sort by price".

  handleSelectPrice(e){
    let value = e.target.value;
    value === "ascending" 
      ? this.setState({
        propertiesToPrint: this.state.propertiesPriceAsc,
        sortPriceValue: 'ascending',
      })
      : this.setState({
        propertiesToPrint: this.state.propertiesPriceDesc,
        sortPriceValue: 'descending',
      })
  }

  //Fetch data again when filtering by property type.

  handleSelectType(e){
    let value = e.target.value;
    this.setState({
      typeToFilter: value,
    }, this.fetchData)
  }

  //Remove previous data when new fetch
  
  removePreviousData(){
    fetchResults = [];
    fetchResultsDesc = [];
  }

  render() {
     
    const{
      propertiesToPrint,
      typeToFilter,
      errorInFetch, 
      sortPriceValue,
    }=this.state;

    return (
      <Fragment> 
        <Header/>
        <Main
          propertiesToPrint={propertiesToPrint}
          handleSelectPrice={this.handleSelectPrice} 
          numberResults={numberResults}
          handleSelectType={this.handleSelectType}
          typeToFilter={typeToFilter}
          errorInFetch={errorInFetch}
          sortPriceValue={sortPriceValue}
        />
      </Fragment>
    );
  }
}
 
export default App;
