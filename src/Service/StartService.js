const StartService = async () =>
{
    let url ="https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=c66e68db6fdcdb430913a6992f4611e3&units=metric" 

    return await fetch(url).then(resp => resp.json());
};
export default StartService;