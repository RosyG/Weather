let currentData = object => {
  let currently = object.currently;
  let iconDay = currently.icon;
  let pressure = currently.pressure;
  let uvIndex = currently.uvIndex;
  let temperature = currently.temperature;
  let windSpeed = currently.windSpeed;
  let humidity = currently.humidity;

   let templateCurrent =  `
  <div>Icon ${iconDay}</div>
  <h3>${temperature}°</h3>
  <h4>Wind ${windSpeed} m/s</h4>
  <h4>Humidity ${humidity} %</h4>
  <h4>UV index ${uvIndex}</h4>
  <h4>Pressure ${pressure} hPa</h4>`;

  paintTemplate(templateCurrent);
}//Fin de función currentData(data).


const week = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];//Días de la semana.
const data = [0,2,3,4,5,6,7];
let templateString = "";

const weatherWeek = data => {
for (let i = 0; i < 7; i++) {
  templateString +=  `<h4 class="style-week">${week[i]} ${data[i]} </h4>`;
}//Fin de for.

paintWeek(templateString);

}//Fin de la función weatherWeek(data).

weatherWeek(data)
