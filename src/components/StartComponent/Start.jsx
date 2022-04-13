//Aktuell plats: stockholm, nuvarande tid & datum, nuvarande temp. 

const StartComponent =  (props) =>
{
    //temp funkar inte, local time kommer inte funka heller
    let start = props.Start;
    let other = props.Start.main
    console.log(other);
    let localTime = "hej";
    return(<>
        <h2>{start.name}</h2>
        <p></p>
        <p></p>
        </>)
};
export default StartComponent;
//https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=c66e68db6fdcdb430913a6992f4611e3&units=metric 
//för celsius 