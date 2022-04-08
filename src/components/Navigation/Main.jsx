import StartContainer from '../../container/StartContainer'
import SearchContainer from '../../container/SearchContainer'
import {Routes, Route} from "react-router-dom";

const Main = () =>
{
    //Exact path 
    return(<Routes>
            <Route exact path ="/" element={<StartContainer/>} />
            <Route path ="/search" element={<SearchContainer/>} />
            </Routes>)
};
export default Main;