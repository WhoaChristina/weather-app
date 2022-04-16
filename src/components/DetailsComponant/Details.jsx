import dayjs from "dayjs";

//näst kommande 5 dagar, min/max temp per dag, datum och ikon
const Details = (props) =>
{
    var utc = require('dayjs/plugin/utc')
    dayjs.extend(utc)
    let city = props.City;
    console.log(props.Icons);
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
        <li><img src={icons} alt="icons" /> </li>
        );

        return (<>
            <h3>Datum:</h3>
            <ul>{dates}</ul>
            <h3>Max temp:</h3>
            <ul>{maxTemp}</ul>
            <h3>Min temp:</h3>
            <ul>{minTemp}</ul>
            <ul>{iconList}</ul>
        </>)

    }

}
export default Details;