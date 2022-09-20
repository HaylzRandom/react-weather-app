import { useState } from 'react';
import './App.css';

// Components
import Search from './components/search/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import WeatherForecast from './components/weatherForecast/WeatherForecast';

// API
import { weatherAPIOptions } from './api';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const handleSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split(' ');
		console.log('Lat:', lat);
		console.log('Lon: ', lon);

		/* const currentWeatherFetch = fetch(
			`${process.env.REACT_APP_WEATHERAPI_URL}/current.json?q=${lat},${lon}`,
			weatherAPIOptions
		);

		const forecastFetch = fetch(
			`${process.env.REACT_APP_WEATHERAPI_URL}/forecast.json?q=${lat},${lon}&days=3`,
			weatherAPIOptions
		);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse });
			})
			.catch((error) => console.log('Error: ', error)); */

		fetch(
			`${process.env.REACT_APP_WEATHERAPI_URL}/forecast.json?q=${lat},${lon}&days=3`,
			weatherAPIOptions
		)
			.then((response) => response.json())
			.then((response) => setWeather({ city: searchData.label, ...response }))
			.catch((err) => console.error(err));
	};
	/* console.log(weather); */

	/* console.log(currentWeather); */
	/* console.log(forecast); */

	return (
		<div className='container'>
			<Search onSearchChange={handleSearchChange} />
			{weather && <CurrentWeather data={weather} />}
			{weather && <WeatherForecast data={weather} />}
		</div>
	);
};

export default App;
