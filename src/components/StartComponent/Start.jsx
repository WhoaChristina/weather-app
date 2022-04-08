//Aktuell plats: stockholm, nuvarande tid & datum, nuvarande temp. 

const StartComponent =  ({item}) =>
{
    //temp funkar inte, local time kommer inte funka heller
    let localTime = "hej";
    return(<>
        <h2>{item.name}</h2>
        <p>{localTime}</p>
        <p>{item.temp}</p>
        </>)
};
export default StartComponent;
//https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=c66e68db6fdcdb430913a6992f4611e3&units=metric 
//för celsius 