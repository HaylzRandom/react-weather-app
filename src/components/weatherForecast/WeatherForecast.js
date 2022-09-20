import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';

// Styles
import './weatherForecast.css';

const WeatherForecast = ({ data }) => {
	const { forecastday } = data.forecast;
	const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const calculateDayOfWeek = (date) => {
		const newDate = new Date(date);
		return weekday[newDate.getDay()];
	};

	const calculateDayOfMonth = (date) => {
		const dt = new Date(date);
		return (
			dt.getDate() +
			(dt.getDate() % 10 == 1 && dt.getDate() != 11
				? 'st'
				: dt.getDate() % 10 == 2 && dt.getDate() != 12
				? 'nd'
				: dt.getDate() % 10 == 3 && dt.getDate() != 13
				? 'rd'
				: 'th')
		);
	};

	return (
		<>
			<h3 className='forecast-title'>3-Day Forecast</h3>
			<Accordion allowZeroExpanded>
				{forecastday.map((forecast, idx) => {
					return (
						<AccordionItem key={idx}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<div className='daily-item'>
										<img
											src={forecast.day.condition.icon}
											alt='weather'
											className='icon-small'
										/>
										<span className='day'>
											{calculateDayOfWeek(forecast.date)}{' '}
											{calculateDayOfMonth(forecast.date)}
										</span>
										<span className='description'>
											{forecast.day.condition.text}
										</span>
										<span className='min-max'>
											{Math.round(forecast.day.maxtemp_c)}°C /{' '}
											{Math.round(forecast.day.mintemp_c)}°C
										</span>
									</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<div className='daily-details-grid'>
									<div className='daily-details-grid-item'>
										<span>Wind speed:</span>
										<span>{forecast.day.maxwind_mph}mph</span>
									</div>
									<div className='daily-details-grid-item'>
										<span>Chance of Rain:</span>
										<span>{forecast.day.daily_chance_of_rain}%</span>
									</div>
									{forecast.day.daily_chance_of_rain >= 1 && (
										<div className='daily-details-grid-item'>
											<span>Total Amount of Rain:</span>
											<span>{forecast.day.totalprecip_mm}mm</span>
										</div>
									)}
									<div className='daily-details-grid-item'>
										<span>Sunrise:</span>
										<span>{forecast.astro.sunrise}</span>
									</div>
									<div className='daily-details-grid-item'>
										<span>Sunset:</span>
										<span>{forecast.astro.sunset}</span>
									</div>
								</div>
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default WeatherForecast;
