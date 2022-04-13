import { useState } from "react";
import SearchService from '../Service/SearchService'
import Search from '../components/SearchComponant/Search'
import SearchRes from "../components/SearchComponant/SearchRes"
const SearchContainer = () =>
{
    let [cityList, setCityList] = useState([]); 
    const search = async (searchVal) =>
    {
        let res = await SearchService();
        let filteredRes = res.filter(a => a.name.toLowerCase().includes(searchVal.toLowerCase()));
        setCityList(filteredRes)
    };
    return(<>
        <Search makeSearch={search}/>
        <SearchRes list = {cityList} />
        </>);
};
export default SearchContainer;