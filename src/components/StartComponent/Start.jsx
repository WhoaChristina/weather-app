import dayjs from "dayjs";

const StartComponent =  (props) =>
{
    //temp funkar inte, local time kommer inte funka heller
    let img = props.Icon;
    let start = props.Start;
    let other = 0.0;
    let date = dayjs().format("YY-MM-DD HH:mm").toString();
    if(props.Start.base)
    {
        other = Math.round(start.main.temp);
    }

    return(<>
        <h2>{start.name}</h2>
        <img src={img} alt="icons" />
        <p>{other} ºC</p>
        <p>{date}</p>
        </>)
};
export default StartComponent;
//https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=c66e68db6fdcdb430913a6992f4611e3&units=metric 
//för celsius 