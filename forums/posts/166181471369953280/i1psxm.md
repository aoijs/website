---
title: "Get Weather"
description: "A simple custom function for getting the weather of someplace.

Kinda useless :)"
authors:
  name: "@jollyjolli"
  title: Member - 166181471369953280
  userid: "166181471369953280"
  url: https://discord.com/users/166181471369953280
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

### Api Key:
**[Weather Api](https://www.weatherapi.com/)**

```js
bot.functionManager.createFunction({
  name: "$getWeather",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [location, format = "{temperature}°C, {condition}, Humidity: {humidity}%, Wind Speed: {windSpeed} km/h"] = data.inside.splits;

    if (!location) {
      data.result = "Error: Please provide a location.";
      return { code: d.util.setCode(data) };
    }

    try {
      const weatherData = await fetchWeatherData(location);

      if (weatherData.error) {
        throw new Error(weatherData.error.message);
      }

      const temperature = weatherData.current.temp_c;
      const condition = weatherData.current.condition.text;
      const humidity = weatherData.current.humidity;
      const windSpeed = weatherData.current.wind_kph;

      let message = format;
      message = message.replace(/{temperature}/g, temperature);
      message = message.replace(/{condition}/g, condition);
      message = message.replace(/{humidity}/g, humidity);
      message = message.replace(/{windSpeed}/g, windSpeed);

      data.result = message;
    } catch (error) {
      data.result = `Error: ${error.message}`;
    }

    return {
      code: d.util.setCode(data)
    };
  }
});

async function fetchWeatherData(location) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

## Usage:
```prolog
$getWeather[location;format]
```

### Formats:
- {temperature}: Current temperature.
- {condition}: Weather condition.
- {humidity}: Humidity.
- {windSpeed}: Wind speed.

### Example:
```prolog
$getWeather[New York;Temperature: {temperature}°C, Condition: {condition}, Humidity: {humidity}%, Wind Speed: {windSpeed} km/h]
```

# NOTE: CHANGE YOUR_API_KEY FOR YOUR ACTUAL API KEY