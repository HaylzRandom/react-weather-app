import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

// API
import { geoAPIOptions } from '../../api';

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	const loadOptions = (inputValue) => {
		return fetch(
			`${process.env.REACT_APP_GEOAPI_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
			geoAPIOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};

	const handleChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder='Search for city...'
			debounceTimeout={600}
			value={search}
			onChange={handleChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
