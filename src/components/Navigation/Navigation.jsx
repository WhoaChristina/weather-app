import { NavLink } from "react-router-dom";
const Navigation = () =>
{
    return(<>
            <nav>
                <ul>
                    <li><NavLink to="/">Start</NavLink></li>
                    <input type="text" />
                    <button><NavLink to="/search">Sök</NavLink></button>
                </ul>
            </nav>
            </>)
};
export default Navigation;