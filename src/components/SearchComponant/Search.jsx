import { useRef } from "react";
const Search = ({Search}) =>
{
    const searchVal = useRef(); 
    return (<>
            <input type="text" ref={searchVal}/>
            <button onClick={() => Search(searchVal.current.value)}>Sök</button>
            </>);
};
export default Search;