import { NavLink } from "react-router-dom";
const Navigation = () =>
{
    return(<>
            <nav>
                <ul>
                    <li><NavLink to="/">Start</NavLink></li>
                    <li><NavLink to="/search">Sök</NavLink></li>
                </ul>
            </nav>
            </>)
};
export default Navigation;