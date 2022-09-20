export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_GEOAPI_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};

export const weatherAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
	},
};
