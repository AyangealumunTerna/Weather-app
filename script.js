// Declearing variables
let apiKey = "b77f12a45fe34cd09b4141243242612";
let locationInput = document.getElementById('location');
let whetherIcon = document.getElementById('whether-icon');
let setLocation = document.getElementById('set-location');
let setTemperature = document.getElementById('set-temperature');
let setDescription = document.getElementById('set-description');
let setHumidity = document.getElementById('set-humidity');



// set the whether information
const setWhether = async () => {
    let anyLocation = locationInput.value || 'Nigeria';
    let getWhetheData = await getWeather(anyLocation);
    if(getWhetheData === false) {
        alert('Could not get whether data, please try again later.');
    } else {;
        whetherIcon.src = 'https:' + getWhetheData.current.condition.icon;
        setLocation.innerHTML = `Location: ${getWhetheData.location.name}, ${getWhetheData.location.country}`;
        setTemperature.innerHTML = `Temperature: ${getWhetheData.current.temp_c}°C`;
        setDescription.innerHTML = `Description: ${getWhetheData.current.is_day ? 'Day' : 'Night'}`;
        setHumidity.innerHTML = `Humidity: ${getWhetheData.current.humidity}%`;
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
        return data;
    } catch (error) {
        console.error('Error: ' + error.message);
        return false;
    }
}

setWhether();
