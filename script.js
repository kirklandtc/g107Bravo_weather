// console.log("Wake Up!")
// alert("Hello!!")
window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let locationTimezone = document.querySelector('location-timezone');

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coods.latitude;

        // const proxy ='https://cors-anywhere.herokuapp.com/';
        const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c9c4d3149a53a2d22839cf23c9022d7e/${lat},${long}`;

      fetch(api)
       .then(response => {
         return response.json();
       })
       .then(data => {
         console.log(data);
         const { temperature, summary } = data.currently;
//Set DOM elements from the api
         temperatureDegree.textContent = temperature;

        });
    });
   }
});
