// weather for given location
const weather = new Weather('Tartu linn');
//
const ui = new UI();

cityWeather = weather.weatherData().then(cityWeather => { ui.print(cityWeather)}).catch(error => console.log(error));



console.log(cityWeather);
console.log(ui)