
const SearchService = async (name) =>
{
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ name +"&appid=c66e68db6fdcdb430913a6992f4611e3&units=metric" ;
    return await fetch(url).then(response=>response.json());
}
export default SearchService;