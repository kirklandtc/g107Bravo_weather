// console.log("Wake Up!")
// alert("Hello!!")
window.addEventListener('load', ()=> {
  let long;
  let lat;

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coods.latitude;

        const api = `https://api.darksky.net/forecast/c9c4d3149a53a2d22839cf23c9022d7e/${lat},${long}`;

      fetch(api)
       .then(data => {
         return data.json();
       })
       .then(data => {
           });
    });
  }
});
