const apikey= "7cf15dcdccd4512e3d1b67be8470d7d2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
const searchinput=document.querySelector(".searchbox input");
const searchbutton=document.querySelector(".searchbox button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city)
{
const response=await fetch(apiurl+city+`&appid=${apikey}`+`&units=metric`);
var data=await response.json();
document.querySelector(".city-name").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°C';
document.querySelector(".humidity").innerHTML=data.main.humidity+'%';
document.querySelector(".wind").innerHTML=data.wind.speed+'km/h';
if(data.weather[0].main=="Clouds")
{
    weathericon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear")
{
    weathericon.src="images/clear.png";
}
else if(data.weather[0].main=="Rain")
{
    weathericon.src="images/rain.png";
}
else if(data.weather[0].main=="drizzle")
{
    weathericon.src="images/drizzle.png";
}
else if(data.weather[0].main=="mist")
{
        weathericon.src="images/mist.png";
}
else if(data.weather[0].main=="snow")
{
        weathericon.src="images/snow.png";
}
document.querySelector(".weather").style.display="block";  
}
searchbutton.addEventListener("click",() =>{
checkweather(searchinput.value)
})