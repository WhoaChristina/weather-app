import StartService from "../Service/StartService";
import Start from "../components/StartComponent/Start"
import IconService from "../Service/IconService";
import { useState,useEffect } from "react";

const WeatherContainer = () =>
{
    const[startList, setStartlist] = useState([])
    const [img, setImg] = useState();
    useEffect( () => 
    {
        const getStart = async() => 
        {
            let start = await StartService();

            const res = await IconService(start.weather[0].icon);
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