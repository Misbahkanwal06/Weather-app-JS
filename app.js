// let obj = {
//     name:"misbah",
//     roll: 31,
//     subj: "CS",
//     0:"me"

// }
// console.log(obj["name"]);
// console.log(obj.name);
// console.log(obj[0]);

//****************************** WEATHER APP

function getWeather(){
   let cityName = document.querySelector("#cityName").value;
   let api_key = 'a8515898e4f25b86192b957b4b96a1fd';
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`)
//    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`)

  .then(function (response) {
    console.log(response.data);
    document.querySelector('#result').innerHTML = `Current temperature of ${cityName} is ${response.data.main.temp} °C`;
  })
  .catch(function (error) {
    console.log(error);
    console.log("error in getting data");
  })
}

