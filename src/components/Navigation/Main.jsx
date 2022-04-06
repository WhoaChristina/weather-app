import Start from '../StartComponent/Start'
import Search from '../SearchComponant/Search'
import {Routes, Route} from "react-router-dom";

const Main = () =>
{
    //Exact path 
    return(<Routes>
            <Route exact path ="/" element={<Start/>} />
            <Route path ="/search" element={<Search/>} />
            </Routes>)
};
export default Main;