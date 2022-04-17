import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import DetailService from "../Service/DetailService";
import Details from "../components/DetailsComponant/Details"
import IconService from "../Service/IconService";
const DetailsContainer = (props) =>
{
    const location = useLocation();
    const {city} = location.state;
    const [chosenCity, setChosenCity] = useState();
    const [icons, setIcons] = useState([]);

    useEffect(() => 
    {
        const getChosenCity = async () => 
        {
            let res = await DetailService(city.latitude, city.longitude);
            for (let i = 0; i < res.daily.length; i++) 
            {
                let resI = await IconService(res.daily[i].weather[0].icon)
                const imageBlob = await resI.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setIcons(oldArray => [...oldArray, imageObjectURL]);
            }
            setChosenCity(res);
        }
        getChosenCity();
    }, [])
    return (<Details City = {chosenCity} Name = {city.name} Icons = {icons}/>)
}
export default DetailsContainer;