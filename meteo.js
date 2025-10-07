 // Elementos DOM
        const cityInput = document.getElementById('city-input');
        const searchBtn = document.getElementById('search-btn');
        const weatherCard = document.getElementById('weather-card');
        const errorMessage = document.getElementById('error-message');
        
        // Elementos de dados meteorológicos
        const cityName = document.getElementById('city-name');
        const country = document.getElementById('country');
        const temperature = document.getElementById('temperature');
        const weatherIcon = document.getElementById('weather-icon');
        const weatherDescription = document.getElementById('weather-description');
        const feelsLike = document.getElementById('feels-like');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');
        const pressure = document.getElementById('pressure');
        
        // Chave da API (substitua pela sua chave)
        const apiKey = 'c1bdcc0f8d36e0fe359e28d78d73660a'; // Você precisa obter uma chave gratuita em https://openweathermap.org/api
        
        // Função para buscar dados meteorológicos
        async function fetchWeatherData(city) {
            try {
                // URL da API
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
                
                // Fazer a requisição
                const response = await fetch(apiUrl);
                
                // Verificar se a resposta foi bem-sucedida
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Chave da API inválida');
                    } else if (response.status === 404) {
                        throw new Error('Cidade não encontrada');
                    } else {
                        throw new Error('Erro desconhecido');
                    }
                }
                
                // Converter resposta para JSON
                const data = await response.json();
                
                // Exibir os dados
                displayWeatherData(data);
                
                // Esconder mensagem de erro se estiver visível
                errorMessage.style.display = 'none';
                
            }  catch (error) {
                // Exibir mensagem de erro
                errorMessage.style.display = 'block';
                weatherCard.style.display = 'none';
            
                // Exibir mensagem de erro específica
                if (error.message === 'Chave da API inválida') {
                    errorMessage.textContent = 'Chave da API inválida. Verifique sua chave.';
                } else if (error.message === 'Cidade não encontrada') {
                    errorMessage.textContent = 'Cidade não encontrada. Verifique o nome e tente novamente.';
                } else {
                    errorMessage.textContent = 'Erro ao buscar dados. Tente novamente mais tarde.';
                }
                console.error('Erro ao buscar dados:',error);
            }
        }
        
        // Função para exibir dados meteorológicos
        function displayWeatherData(data) {
            // Preencher os elementos com os dados
            cityName.textContent = data.name;
            country.textContent = `, ${data.sys.country}`;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
            humidity.textContent = `${data.main.humidity}%`;
            windSpeed.textContent = `${data.wind.speed} km/h`;
            pressure.textContent = `${data.main.pressure} hPa`;
            
            // Ícone do clima
            const iconCode = data.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            weatherIcon.alt = data.weather[0].description;
            
            // Exibir o card de clima
            weatherCard.style.display = 'block';
        }
        
        // Evento de clique no botão de busca
        searchBtn.addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeatherData(city);
            }
        });
        
        // Evento de pressionar Enter no campo de entrada
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const city = cityInput.value.trim();
                if (city) {
                    fetchWeatherData(city);
                }
            }
        });
        
        // Buscar dados de uma cidade padrão ao carregar a página
        window.addEventListener('load', () => {
            fetchWeatherData('Mindelo'); // Cidade padrão
        });