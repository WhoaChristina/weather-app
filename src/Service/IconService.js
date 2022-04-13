const IconService = async (iconName) =>
{
    let url = "https://openweathermap.org/img/wn/" + iconName + "@2x.png";
    return await fetch(url);
}
export default IconService;