import { useRef } from "react";
import "./SearchStyle.css";
const Search = ({makeSearch}) =>
{
    const searchVal = useRef(); 
    return (<>
            <div className="center1">
            <label>Stad?</label>
            <br/>
            <input type="text" ref={searchVal}/>
            <button onClick={() => makeSearch(searchVal.current.value)} className="btn1">Sök</button>
            </div>
            </>);
};
export default Search;