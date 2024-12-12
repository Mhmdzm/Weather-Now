document.getElementById('btn').addEventListener('click', function() {
    const apiKey = '86974191a76b8db127032d17d60ec4b9'; 
    const city = document.getElementById('city').value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {

            document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humiditytext').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windtext').textContent = `Wind Speed: ${data.wind.speed} m/s`;


            document.getElementById('cityname').textContent = city;

            
            document.getElementById('city').value = '';
        })
        .catch(error => {
           
            document.getElementById('temp').textContent = `Error: ${error.message}`;
            document.getElementById('humiditytext').textContent = '';
            document.getElementById('windtext').textContent = '';
        });
});
