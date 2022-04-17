import { NavLink } from "react-router-dom";
import "./NavStyles.css";
const Navigation = () =>
{
    return(<>
            <nav className="Nav">
                <ul className="navList">
                    <li className="navLi"><NavLink to="/">Start</NavLink></li>
                    <li className="navLi"><NavLink to="/search">Sök</NavLink></li>
                </ul>
            </nav>
            </>)
};
export default Navigation;