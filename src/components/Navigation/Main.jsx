import StartContainer from '../../container/StartContainer'
import SearchContainer from '../../container/SearchContainer'
import DetailsComponent from '../../container/DetailsComponent'
import {Routes, Route} from "react-router-dom";

const Main = () =>
{
    //Exact path 
    return(<Routes>
            <Route exact path ="/" element={<StartContainer/>} />
            <Route path ="/search" element={<SearchContainer/>} />
            <Route path ="/details" element={<DetailsComponent />} />
            </Routes>)
};
export default Main;