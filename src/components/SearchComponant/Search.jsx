import { useRef } from "react";
const Search = ({makeSearch}) =>
{
    const searchVal = useRef(); 
    return (<>
            <input type="text" ref={searchVal}/>
            <button onClick={() => makeSearch(searchVal.current.value)}>Sök</button>
            </>);
};
export default Search;