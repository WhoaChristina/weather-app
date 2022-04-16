import {NavLink} from "react-router-dom";
const SearchList = ({list}) =>
{
    let cityList = list.map(city =>
        {
            return (<>
                    <li>{city.name}</li>
                    <NavLink to="/details" state={{city}}><button>Detaljer</button></NavLink>
                    </>)
        });
    return(<ul>{cityList}</ul>)
};
export default SearchList;
