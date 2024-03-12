setInterval(function () {
  //melbourne
  let melbourneDateElement = document.querySelector("#melbourne .date");
  let melbourneDate = moment.tz("Australia/Melbourne").format("MMMM Do YYYY");
  melbourneDateElement.innerHTML = melbourneDate;

  let melbourneTimeElement = document.querySelector("#melbourne .time");
  let melbourneTime = moment
    .tz("Australia/Melbourne")
    .format("h:mm:ss [<small>]A[</small>]");
  melbourneTimeElement.innerHTML = melbourneTime;

  //Tokyo
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoDate = moment.tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoDateElement.innerHTML = tokyoDate;

  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTime = moment
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
  tokyoTimeElement.innerHTML = tokyoTime;

  //New York
  let newYorkDateElement = document.querySelector("#newYork .date");
  let newYorkDate = moment.tz("America/New_York").format("MMMM Do YYYY");
  newYorkDateElement.innerHTML = newYorkDate;

  let newYorkTimeElement = document.querySelector("#newYork .time");
  let newYorkTime = moment
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");
  newYorkTimeElement.innerHTML = newYorkTime;
}, 1000);

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment.tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let displayCity = document.querySelector("#displayCities");
    displayCity.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
  }
}

let selectCity = document.querySelector("#selectCities");
selectCity.addEventListener("change", updateCity);
