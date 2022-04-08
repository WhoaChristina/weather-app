const StartService = async () =>
{
    let url ="http://api.weatherstack.com/current?access_key=763dec4c2e121bf9b1c0b9f9e300c672&query=Stockholm" 

    return await fetch(url).then(resp => resp.json());
};
export default StartService;