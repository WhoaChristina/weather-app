import StartService from "../Service/StartService";
import Start from "../components/StartComponent/Start"
import { useState,useEffect } from "react";

const WeatherContainer = () =>
{
    const[startList, setStartlist] = useState([])
    const [img, setImg] = useState();
    useEffect( () => {

        const getStart = async() => {

            let start = await StartService();
            const imgUrl = "https://openweathermap.org/img/wn/" + start.weather[0].icon + "@2x.png";
            const res = await fetch(imgUrl);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
            setStartlist(start);

        };
        getStart();

    }, [])
    return(<>
            <Start Start = {startList} Icon ={img} />
            </>)
}
export default WeatherContainer;