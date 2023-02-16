// London
function updateLondonTime() {
    let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

updateLondonTime();
setInterval(updateLondonTime, 1000);


//New York
function updateNewYorkTime() {
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
    }
}
updateNewYorkTime();
setInterval(updateNewYorkTime, 1000);

//Los Angeles
function updateLosAngelesTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
}
updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

  
    //Tokyo
function updateTokyoTime() {
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
      let tokyoTime = moment().tz("Asia/Tokyo");
  
      tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
      tokyoTimeElement.innerHTML = tokyoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);

    //Sydney
function updateSydneyTime() {
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");
  
      sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
}
updateSydneyTime();
setInterval(updateSydneyTime, 1000);

// Paris
function updateParisTime() {
    let parisElement = document.querySelector("#paris");
    if (parisElement) {
      let parisDateElement = parisElement.querySelector(".date");
      let parisTimeElement = parisElement.querySelector(".time");
      let parisTime = moment().tz("Europe/Paris");
  
      parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
      parisTimeElement.innerHTML = parisTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace('_', "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = cityTimeZone;
    citiesElement = `
<div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);