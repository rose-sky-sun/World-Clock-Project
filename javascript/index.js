//js for updating date and time for oslo

let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment();

osloDateElement.innerHTML = moment().format("ddd, Do MMMM, YYYY");
osloTimeElement.innerHTML = `${osloTime.tz("Europe/Oslo").format("h:mm:ss")} <small>${osloTime.format("A")}</small>`;



