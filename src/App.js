import React from 'react';
import './App.css';
import  { Cards , Charts, CountryPicker } from './components';
import Footer from './components/footer/footer'
import  {fetchData}  from './api'



class App extends React.Component{
  state = {
    data: {},
    country: '',

  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
    // y
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country});
    // console.log(fetchedData);
    //fetch data
    // console.log(country);
  }
  render(){
    const { data , country } = this.state;
    return (
      <div className="container">
        <CountryPicker handelCountryChange={this.handleCountryChange}/>
        <Cards data={data}/>
        <Charts data={ data } country={ country }/>
        <Footer />
       
       
      </div>
    );

  }
}

export default App;
