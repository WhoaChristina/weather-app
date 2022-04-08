import { useState } from "react";
import SearchService from '../Service/SearchService'
import SearchRes from '../components/SearchComponant/Search'
const SearchContainer = () =>
{
    let [cityList, setCityList] = useState([]); 
    const Search = (searchVal) =>
    {
        setCityList(SearchService(searchVal))
    };
    return(<>
        <Search callback={Search}/>
        <SearchRes list = {cityList} />
        </>);
};
export default SearchContainer;