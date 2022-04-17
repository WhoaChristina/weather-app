import {NavLink} from "react-router-dom";
import "./SearchStyle.css";
const SearchList = ({list}) =>
{
    let cityList = list.map(city =>
        {
            return (<>
                    <li>{city.name}</li>
                    <NavLink to="/details" state={{city}}><button className="btn2">Detaljer</button></NavLink>
                    </>)
        });
    return(<div className="center2"><ul>{cityList}</ul></div>)
};
export default SearchList;
