import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import  './countrypicker.css';
import  { fetchCountries } from '../../api'

const CountryPicker = ( { handelCountryChange }) => {
    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            setFetchedCountries( await fetchCountries());

        }
        fetchApi();

    } ,[setFetchedCountries]);

    // console.log(fetchedCountries);

    return(
        <div className="CountryPicker">
            <div className="cpTitile">COVID - 19 Tracker</div>
        <FormControl className='formControl'>
            <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default CountryPicker;