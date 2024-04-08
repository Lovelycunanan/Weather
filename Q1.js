async function getWeather() {
    const apiKey = '0f3f6fd4fa7513bb645439ff698bebfa'; 
    const city = 'Calgary';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const tempElement = document.querySelector('.temp');
        const descElement = document.querySelector('.description');
        const humidityElement = document.querySelector('.humidity');
        const windElement = document.querySelector('.wind');

        tempElement.textContent = `${temperature}°C`;
        descElement.textContent = description;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        windElement.textContent = `Wind speed: ${data.wind.speed} km/h`;

        const weatherContainer = document.querySelector('.weather');
        weatherContainer.classList.remove('loading');
    } catch (error) {
        console.log('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}

window.onload = getWeather;
