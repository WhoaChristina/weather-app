const SearchList = ({list}) =>
{
    let cityList = list.map(city =>
        {
            return (<li>{city.name}</li>)
        });
    return(<ul>{cityList}</ul>)
};
export default SearchList;