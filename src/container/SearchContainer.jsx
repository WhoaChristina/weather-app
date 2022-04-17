import { useState } from "react";
import Search from '../components/SearchComponant/Search'
import SearchRes from "../components/SearchComponant/SearchRes"
import { City }  from 'country-state-city';
const SearchContainer = () =>
{
    let [cityList, setCityList] = useState([]); 
    const city = City.getAllCities();

    const search = async (searchVal) => 
    { 
        let res = city.filter(chosenCity => (chosenCity.name.toLowerCase()).includes(searchVal.toLowerCase()));
        setCityList(res);
    };
    return(<>
        <Search makeSearch={search}/>
        <SearchRes list = {cityList} />
        </>);
};
export default SearchContainer;