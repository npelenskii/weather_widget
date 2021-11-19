window.addEventListener('DOMContentLoaded', function() {
    let weatherSearch = function() {

        let xhr = new XMLHttpRequest(),
            cityName = document.querySelector('input'),
            api = config.api,
            url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&units=metric&appid=${api}`,
            inputSection = document.querySelector('.inputSection');

        xhr.open('GET', url, false);
        xhr.send();
        let tempList = [],
            pressureList = [],
            humidityList = [],
            windList = [],
            weatherList = [],
            dataTimeList = [],
            n = 0,
            i;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            let data = xhr.responseText;
            data = JSON.parse(data);
            let City = data.city.name,
                country = data.city.country,
                population = data.city.population,
                lat = data.city.coord.lat,
                lon = data.city.coord.lon;

            for (i of data.list) {
                tempList[n] = i.main.temp;
                pressureList[n] = i.main.pressure;
                humidityList[n] = i.main.humidity;
                windList[n] = i.wind.speed;
                for (let wd of i.weather) {
                    weatherList[n] = wd.main;
                }
                dataTimeList[n] = i.dt_txt;
                n++;
            }
            let titleBox = document.createElement('div'),
                nameField = document.createElement('h2'),
                populationField = document.createElement('p'),
                coordField = document.createElement('p');

            titleBox.classList.add('titleBox');
            nameField.classList.add('nameField');
            populationField.classList.add('populationField');
            coordField.classList.add('coordField');

            nameField.textContent = `${City},${country}`;
            coordField.textContent = `${lat},${lon}`;
            populationField.textContent = `Population: ${population}`;

            document.body.querySelector('.searchSection').querySelector('.showTitle').appendChild(titleBox);
            titleBox.appendChild(nameField);
            titleBox.appendChild(coordField);
            titleBox.appendChild(populationField);
        }


        for (let o = 0; o < 21; o++) {
            let box = document.createElement('div'),
                tempField = document.createElement('p'),
                pressureField = document.createElement('p'),
                humidityField = document.createElement('p'),
                windField = document.createElement('p'),
                dataTimeField = document.createElement('p'),
                weatherField = document.createElement('img');

            box.classList.add('weatherBox');
            tempField.classList.add('temp');
            pressureField.classList.add('pressure');
            humidityField.classList.add('humidity');
            windField.classList.add('wind');
            weatherField.classList.add('weather');
            dataTimeField.classList.add('dataTime');

            tempField.textContent = ` ${tempList[o]} °С`;
            pressureField.textContent = `${pressureList[o]} hpa`;
            humidityField.textContent = `${humidityList[o]} %`;
            windField.textContent = `${windList[o]} m/s`;
            dataTimeField.textContent = dataTimeList[o];

            let dataTimeData = String(dataTimeList[o]).split(' ')[0],
                dataTimeTime = String(dataTimeList[o].split(' ')[1]);

            if (dataTimeTime == '09:00:00' ||
                dataTimeTime == '12:00:00' ||
                dataTimeTime == '15:00:00') {
                if (weatherList[o] == 'Clear') {
                    weatherField.src = 'icons/sun.png';
                }
                if (weatherList[o] == 'Clouds') {
                    weatherField.src = 'icons/cloud.png';
                }
                if (weatherList[o] == 'Rain') {
                    weatherField.src = 'icons/rainy-2.png';
                }
                if (weatherList[o] == 'Snow') {
                    weatherField.src = 'icons/snowflake.png';
                }
                if (weatherList[o] == 'Thunderstorm') {
                    weatherField.src = 'icons/storm.png';
                }
                if (weatherList[o] == 'Drizzle') {
                    weatherField.src = 'icons/rainy.png';
                }
                if (weatherList[o] == 'Mist') {
                    weatherField.src = 'icons/windy.png';
                }
                if (weatherList[o] == 'Smoke') {
                    weatherField.src = 'icons/foog.png';
                }
                if (weatherList[o] == 'Haze') {
                    weatherField.src = 'icons/cloud.png';
                }
                if (weatherList[o] == 'Dust') {
                    weatherField.src = 'icons/hurricane.png';
                }
                if (weatherList[o] == 'Fog') {
                    weatherField.src = 'icons/foog.png';
                }
                if (weatherList[o] == 'Sand') {
                    weatherField.src = 'icons/wind.png';
                }
                if (weatherList[o] == 'Ash') {
                    weatherField.src = 'icons/volcano.png';
                }
                if (weatherList[o] == 'Squall') {
                    weatherField.src = 'icons/storm.png';
                }
                if (weatherList[o] == 'Tornado') {
                    weatherField.src = 'icons/tornado.png';
                }
            }

            if (dataTimeTime == '18:00:00' ||
                dataTimeTime == '21:00:00' ||
                dataTimeTime == '00:00:00' ||
                dataTimeTime == '03:00:00' ||
                dataTimeTime == '06:00:00') {
                if (weatherList[o] == 'Clear') {
                    weatherField.src = 'icons/night.png';
                }
                if (weatherList[o] == 'Clouds') {
                    weatherField.src = 'icons/cloud.png';
                }
                if (weatherList[o] == 'Rain') {
                    weatherField.src = 'icons/rainy-2.png';
                }
                if (weatherList[o] == 'Snow') {
                    weatherField.src = 'icons/snowflake.png';
                }
                if (weatherList[o] == 'Thunderstorm') {
                    weatherField.src = 'icons/storm.png';
                }
                if (weatherList[o] == 'Drizzle') {
                    weatherField.src = 'icons/rainy.png';
                }
                if (weatherList[o] == 'Mist') {
                    weatherField.src = 'icons/windy.png';
                }
                if (weatherList[o] == 'Smoke') {
                    weatherField.src = 'icons/foog.png';
                }
                if (weatherList[o] == 'Haze') {
                    weatherField.src = 'icons/cloud.png';
                }
                if (weatherList[o] == 'Dust') {
                    weatherField.src = 'icons/hurricane.png';
                }
                if (weatherList[o] == 'Fog') {
                    weatherField.src = 'icons/foog.png';
                }
                if (weatherList[o] == 'Sand') {
                    weatherField.src = 'icons/wind.png';
                }
                if (weatherList[o] == 'Ash') {
                    weatherField.src = 'icons/volcano.png';
                }
                if (weatherList[o] == 'Squall') {
                    weatherField.src = 'icons/storm.png';
                }
                if (weatherList[o] == 'Tornado') {
                    weatherField.src = 'icons/tornado.png';
                }
            }

            document.body.querySelector('.showSection').querySelector('.showWeather').appendChild(box);
            box.appendChild(tempField);
            box.appendChild(weatherField);
            box.appendChild(pressureField);
            box.appendChild(humidityField);
            box.appendChild(windField);
            box.appendChild(dataTimeField);

        }
        inputSection.remove();

    };
    let searchBtn = document.querySelector('.search'),
        cityName = document.querySelector('input');


    searchBtn.addEventListener('click', weatherSearch);

    cityName.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            weatherSearch();
        }
    });
});