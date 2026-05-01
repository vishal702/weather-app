async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML =
        `🌤️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } else {
      document.getElementById("result").innerHTML = "City not found!";
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching data!";
  }
}
