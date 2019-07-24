// console.log("Wake Up!")
// alert("Hello!!")
window.addEventListener('load', ()=> {
  let lat;
  let long;
  let temperatureDescription = document.querySelector('.temperature-description');


  let temperatureDegree = document.querySelector('.temperatureDegree');
  let locationTimezone = document.querySelector('location-timezone');
  let temperatureSection = document.querySelector('temperature-section');
  const temperatureSpan = document.querySelector('temperature span');

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coods.latitude;
        long = position.coords.longitude;


         const proxy ='https://cors-anywhere.herokuapp.com/';
         const api = `${proxy}https://api.darksky.net/forecast/c9c4d3149a53a2d22839cf23c9022d7e/${lat},${long}`;

       fetch(api)
       .then(response => {
         return response.json();
       })
       .then(data => {
         console.log(data);
         const { temperature, summary } = data.currently;
//Set DOM elements from the api
         temperatureDegree.textContent = temperature;
         temperatureDescription.textContent = summary;
         locationTimezone.textContent = data.timezone;
// Set Icon
         setIcons(icon, document.querySelector('.icon'));

        

        });
    });
   }
});
