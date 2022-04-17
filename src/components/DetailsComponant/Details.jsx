import dayjs from "dayjs";
import "./Details.css";
const Details = (props) =>
{
    var utc = require('dayjs/plugin/utc')
    dayjs.extend(utc)
    let city = props.City;
    let icon = props.Icons;
    if(city)
    {
        const dates = city.daily.slice(0,5).map((date) =>
            <li>{dayjs.utc(date.dt * 1000).format("YY-MM-DD")}</li>
        );
        const minTemp = city.daily.slice(0,5).map((info) =>
            <li>{Math.round(info.temp.min)} ºC</li>
        );
        const maxTemp = city.daily.slice(0,5).map((info) =>
            <li>{Math.round(info.temp.max)} ºC</li>
        );
        const iconList = icon.slice(0,5).map((icons) =>
        <li><img src={icons} alt="icons" className="image" /> </li>
        );

        return (<>
            <div className="center"><h2>{props.Name}</h2></div>
            <div className="grid">
                <div>
                    <h3>Datum:</h3>
                    <ul>{dates}</ul>
                </div>
                <div>
                    <h3>Max temp:</h3>
                    <ul>{maxTemp}</ul>
                </div>
                <div>
                    <h3>Min temp:</h3>
                    <ul>{minTemp}</ul>
                </div>
                <div>
                    <h3>Väder:</h3>
                    <ul>{iconList}</ul>
                </div>
            </div>
        </>)

    }

}
export default Details;