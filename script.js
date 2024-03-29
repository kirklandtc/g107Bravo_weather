// console.log("Wake Up!")
// alert("Hello!!")
// window.addEventListener('load', ()=> {
 document.addEventListener('DOMContentLoaded', () => {
  // console.log('something');
  let lat;
  let long;
  let temperatureDescription = document.querySelector(".temperature-description");


  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;


         const proxy = "https://cors-anywhere.herokuapp.com/";
         const api = `${proxy}https://api.darksky.net/forecast/f617d7102d6fcef56be732aa0e4edc2f/${lat},${long}`;

         console.log(api);

        fetch(api)
       .then(response => {
         return response.json();
       })
       .then(data => {

         console.log(data);

         const { temperature, summary, icon } = data.currently;
//Set DOM elements from the api

         temperatureDegree.textContent = temperature;
         temperatureDescription.textContent = summary;
         locationTimezone.textContent = data.timezone;
// Set Icon
         setIcons(icon, document.querySelector('.icon'));

//Celsius
        let celsius = (temperature - 32) * (5 / 9);

//Alter Temperature between Celsius/Farenheit
         temperatureSection.addEventListener('click',() =>{
           if(temperatureSpan.textContent === "F"){
             temperatureSpan.textContent = "C";
             temperatureDegree.textContent = Math.floor(celsius);
           } else {
             temperatureSpan.textContent = "F";
             temperatureDegree.textContent = temperature;
           }

        });
      });
    });
   }


   function setIcons(icon, iconID) {
     const skycons = new Skycons({ color: "white" });
     const currentIcon = icon.replace(/-/g, "_").toUpperCase();
     skycons.play();
     return skycons.set(iconID, Skycons[currentIcon]);
   }
});
