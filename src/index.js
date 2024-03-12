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
