export async function getCityCoordinates(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`City not found: ${city}`);
  }
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    const { latitude, longitude } = data.results[0];
    return { latitude, longitude };
  } else {
    throw new Error(`No coordinates found for: ${city}`);
  }
}

export async function getWeather(city) {
  try {
    const { latitude, longitude } = await getCityCoordinates(city);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather data not available for: ${city}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function displayWeather(data) {
  const { current_weather } = data;
  const weatherResult = document.querySelector(".forecast");
  weatherResult.innerHTML = `
      <h2>Current Weather</h2>
      <p>Temperature: ${current_weather.temperature} °C</p>
      <p>Wind Speed: ${current_weather.windspeed} km/h</p>
      <p>Condition: ${current_weather.weathercode}</p>
    `;
}

export function setupUI() {
  const weatherResult = document.querySelector(".forecast");
  const app = document.createElement("div");
  app.innerHTML = `
      <h1>Weather App</h1>
      <input type="text" id="city" placeholder="Enter city name" />
      <button id="getWeather">Get Weather</button>
    `;
  weatherResult.appendChild(app);

  const getWeatherButton = document.getElementById("getWeather");
  getWeatherButton.addEventListener("click", async () => {
    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();
    if (city) {
      try {
        const data = await getWeather(city);
        displayWeather(data);
      } catch (error) {
        weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
      }
    } else {
      weatherResult.innerHTML =
        '<p style="color: red;">Please enter a city name.</p>';
    }
  });
}

setupUI();
