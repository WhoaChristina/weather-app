import StartContainer from '../../container/StartContainer'
import SearchContainer from '../../container/SearchContainer'
import DetailsContainer from '../../container/DetailsContainer'
import {Routes, Route} from "react-router-dom";

const Main = () =>
{
    return(<Routes>
            <Route exact path ="/" element={<StartContainer/>} />
            <Route path ="/search" element={<SearchContainer/>} />
            <Route path ="/details" element={<DetailsContainer />} />
            </Routes>)
};
export default Main;