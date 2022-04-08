import StartService from "../Service/StartService";
import Start from "../components/StartComponent/Start"
import { useState,useEffect } from "react";

const WeatherContainer = () =>
{
    const[startList, setStartlist] = useState([])
    useEffect( () => {

        const test = async () => {

            let start = await StartService();
            setStartlist(start);

        };
        test();

    }, [])
    return(<>
            <Start item = {startList} />
            </>)
}
export default WeatherContainer;