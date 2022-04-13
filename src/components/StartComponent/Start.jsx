import dayjs from "dayjs";

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

    return(<>
        <h2>{start.name}</h2>
        <img src={img} alt="icons" />
        <p>{other} ºC</p>
        <p>{date}</p>
        </>)
};
export default StartComponent;