function updateTime() {
//js for updating local date and time
let localElement = document.querySelector("#local");
let localDateElement = localElement.querySelector(".date");
let localTimeElement = localElement.querySelector(".time");

localDateElement.innerHTML = moment().format("ddd, Do MMMM, YYYY");
localTimeElement.innerHTML = moment().format("h:mm:ss [<small>]A[</small>]");

//js for updating date and time for paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

parisDateElement.innerHTML = moment().format("ddd, Do MMMM, YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");

//js for updating date and time for New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");

newYorkDateElement.innerHTML = moment().format("ddd, Do MMMM, YYYY");
newYorkTimeElement.innerHTML = moment().tz("America/New_York").format("h:mm:ss [<small>]A[</small>]");

//js for updating date and time for Beijing
let beijingElement = document.querySelector("#beijing");
let beijingDateElement = beijingElement.querySelector(".date");
let beijingTimeElement = beijingElement.querySelector(".time");

beijingDateElement.innerHTML = moment().format("ddd, Do MMMM, YYYY");
beijingTimeElement.innerHTML = moment().tz("Asia/Manila").format("h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);
