import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function CovidTracker() {
const [data, setData] = useState({});
const [countries, setCountries] = useState([]);
const [selectedCountry, setSelectedCountry] = useState('worldwide');
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchGlobalData = async () => {
    try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    setData(response.data);
    setLoading(false);
    } catch (error) {
    setError(error);
    setLoading(false);
    }
};

const fetchCountries = async () => {
    try {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    setCountries(response.data);
    } catch (error) {
    console.error(error);
    }
};

fetchGlobalData();
fetchCountries();
}, []);

useEffect(() => {
const fetchData = async () => {
    setLoading(true);
    try {
    let response;
    if (selectedCountry === 'worldwide') {
        response = await axios.get('https://disease.sh/v3/covid-19/all');
    } else {
        response = await axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`);
    }
    setData(response.data);
    setLoading(false);
    } catch (error) {
    setError(error);
    setLoading(false);
    }
};

fetchData();
}, [selectedCountry]);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
<div className="CovidSec">
    <header className="CovidSec-header">
    <h1>COVID-19 Tracker</h1>
    </header>
    <div className="covid-stats">
    <h2>COVID-19 Statistics</h2>
    <select onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="worldwide">Worldwide</option>
        {countries.map((country) => (
        <option key={country.country} value={country.countryInfo.iso3}>
            {country.country}
        </option>
        ))}
    </select>
    <p>Total Cases: {data.cases}</p>
    <p>Total Deaths: {data.deaths}</p>
    <p>Total Recovered: {data.recovered}</p>
    <p>Active Cases: {data.active}</p>
    </div>
</div>
);
}

export default CovidTracker;