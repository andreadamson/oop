class Weather{
    // constructor
    constructor(c){
      this.city = c;
      this.key = 'e76b4e6aa9c842b7ec7bc7ad197a19da';
    }
  
    // data from API
    async weatherData(){
      const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.city + '&appid=' + this.key);
      const data = await resp.json();
      console.log(data);
      return data;
    }
  
    // change city name
    changeCityName(name){
        this.city = name;
    }
}