let contentCurrent = document.querySelector('#content-current');
let contentWeek = document.querySelector("#content-week");

let paintTemplate = string => contentCurrent.innerHTML = string;

let paintWeek = stringWeek =>contentWeek.innerHTML = stringWeek;
