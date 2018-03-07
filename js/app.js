//var proxy = 'https://cors-anywhere.herokuapp.com/';//por el error proxy.
const urlCall = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d9d8bdc793d48b21d618b8a704e40e5f/19.5691954,-99.1290131";
//Formato de URL: https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const urlApiFlickr = "https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value";

$(document).ready ( () => {

  fetch( urlCall )
    .then( results => results.json() )//Asegurando que la respuesta este en estructura JSON.
    .then( data => showHourly(data) )
    .catch( error => console.error( 'Oooops!' ) );

});

let showHourly = object => {
  let hourly = object.hourly;
  console.log(hourly);
  let iconDay = hourly.icon;
  let latitude = object.latitude;
  console.log(latitude);
  //las próximas varables son arreglos.
  let temperature = hourly.data.temperature;//temperature es un array.
  let windSpeed = hourly.data.windSpeed;
  let uvIndex = hourly.uvIndex;
  let pressure = hourly.pressure;
}
