import dayjs from "dayjs";
import "./Start.css";
const StartComponent =  (props) =>
{
    let img = props.Icon;
    let start = props.Start;
    let other = 0.0;
    let date = dayjs().format("YY-MM-DD HH:mm").toString();
    if(props.Start.base)
    {
        other = Math.round(start.main.temp);
    }
    console.log(img);
    return(<>
        <div className="center">
        <h2>{start.name}</h2>
        <img src={img} alt="icons" className="image1" />
        <p>Temperatur: {other} ºC</p>
        <p>{date}</p>
        </div>
        </>)
};
export default StartComponent;