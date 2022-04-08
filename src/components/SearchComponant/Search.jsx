import { useRef } from "react";
const Search = () =>
{
    const searchVal = useRef(); 
    return (<>
            <input type="text" ref={searchVal}/>
            <button >Sök</button>
            </>);
};
export default Search;
//onClick= {() =>callback(searchVal.current.value)}