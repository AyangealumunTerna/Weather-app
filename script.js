// Declearing variables
let apiKey = "b77f12a45fe34cd09b4141243242612";
let locationInput = document.getElementById('location');
let whetherIcon = document.getElementById('whether-icon');
let setLocation = document.getElementById('set-location');
let setTemperature = document.getElementById('set-temperature');
// let setDescription = document.getElementById('set-description');
// let setHumidity = document.getElementById('set-humidity');
let Wheather = document.getElementById("discription")



// set the whether information
const setWheather = async () => {
    let anyLocation = locationInput.value || 'Nigeria';
    // (anyLocation) this varriable could be any word of your choice it's not a func or any decleared variable.
    let getWheatherData = await getWeather(anyLocation);
    if(getWheatherData === false) {
        alert('Could not get whether data, please try again later.');
    } else {
        whetherIcon.src = 'https:' + getWheatherData.current.condition.icon;
        Wheather.innerHTML = `${getWheatherData.current.condition.text}`
        setLocation.innerHTML = ` ${getWheatherData.location.name}, ${getWheatherData.location.country}`;
        setTemperature.innerHTML = Math.floor(`${getWheatherData.current.temp_c}`) + '°C';
        // setDescription.innerHTML = `Description: ${getWhetheData.current.is_day ? 'Day' : 'Night'}`;
        // setHumidity.innerHTML = `Humidity: ${getWhetheData.current.humidity}%`;
    }
};

// Get whether data from an endpoint (API)
async function getWeather(inputLocation) {
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.weatherapi.com/v1/current.json?key=${encodeURIComponent(apiKey)}&q=${inputLocation}&aqi=no`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Location not found');
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error: ' + error.message);
        return false;
    }
}

setWheather();
