//Aktuell plats: stockholm, nuvarande tid & datum, nuvarande temp. 

const StartComponent =  ({item}) =>
{
    return(<>
        <h2>{item.name}</h2>
        <p>{item.localtime}</p>
        <p>{item.temperature}</p>
        </>)
};
export default StartComponent;
/*{"request":{"type":"City","query":"Stockholm, Sweden","language":"en","unit":"m"},
"location":{"name":"Stockholm","country":"Sweden","region":"Stockholms Lan","lat":"59.333","lon":"18.050","timezone_id":"Europe\/Stockholm","localtime":"2022-04-07 21:18","localtime_epoch":1649366280,"utc_offset":"2.0"},
"current":{"observation_time":"07:18 PM","temperature":1,"weather_code":296,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0033_cloudy_with_light_rain_night.png"],
"weather_descriptions":["Light Rain"],"wind_speed":22,"wind_degree":70,"wind_dir":"ENE","pressure":974,"precip":2.3,"humidity":100,"cloudcover":100,"feelslike":-4,"uv_index":1,"visibility":10,"is_day":"no"}}*/