import StartService from "../Service/StartService";
import Start from "../components/StartComponent/Start"
import { useState,useEffect } from "react";

const WeatherContainer = () =>
{
    const[startList, setStartlist] = useState([])
    useEffect( () => {

        const getStart = async() => {

            let start = await StartService();
            setStartlist(start);

        };
        getStart();

    }, [])
    return(<>
            <Start Start = {startList} />
            </>)
}
export default WeatherContainer;