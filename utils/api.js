export const fetchLocationId = async city => {
	const response = await fetch(
		`https://www.metaweather.com/api/location/search/?query=${city}`
	);
	const locations = await response.json();
	return locations[0].woeid;
};
export const fetchWeather = async woeid => {
	const response = await fetch(
		`https://www.metaweather.com/api/location/${woeid}/`
	);
	const { title, consolidated_weather } = await response.json();
	const {
		weather_state_name,
		the_temp,
		humidity,
		min_temp,
		max_temp,
		wind_speed,
	} = consolidated_weather[0];

	return {
		location: title,
		weather: weather_state_name,
		temperature: the_temp,
		humidity,
		minTemp: min_temp,
		maxTemp: max_temp,
		windSpeed: wind_speed,
	};
};

export const fetchWeathericon = async city => {
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f77559a0db1ec3b427bec674abc8855e&units=metric`
	);
	const { weather } = await response.json();
	const {
		icon
	} = weather[0];

	return {
		weathericon: icon
	};

};
