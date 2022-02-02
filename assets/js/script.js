document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80')";

const search = document.getElementById("search");
const searchSubmit = document.getElementById("submit");

searchSubmit.addEventListener("click", function () {
  let city = search.value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&lang=fr&units=metric&appid=03b7774c0ed3e399c3cfe5d14297a461";

  fetch(url)
    .then(function (res) {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
    })

    .then(function (regions) {
      console.log(regions);
      document.getElementById("title").innerHTML = regions.name;
      document.getElementById("temperature").innerHTML =
        regions.main.temp + `°`;
      document.getElementById("temp-maximale").innerHTML =
        regions.main.temp_max;
      document.getElementById("temp-minimale").innerHTML =
        regions.main.temp_min;
      document.getElementById("temp-ressenti").innerHTML =
        regions.main.feels_like;
      document.getElementById("vitesse-du-vent").innerHTML =
        regions.main.pressure;
      document.getElementById("taux-d'humidité").innerHTML =
        regions.main.humidity;
      let icon = regions.weather.find((e) => (e.icon = e.icon));
      console.log(icon.icon);
      const srcimage =
        " http://openweathermap.org/img/wn/" + icon.icon + "@2x.png";
      document.getElementById("images").src = srcimage;
    })

    .catch(function (err) {
      // Une erreur est survenue

      console.log(err, "error");
    });
});

search.addEventListener("input", function () {
  let autocomplete = search.value;
  fetch(
    "https://geo.api.gouv.fr/communes?nom=" +
      autocomplete +
      "&boost=population&limit=10"
  )
    .then((response) => response.json())

    .then(function (regions) {
      console.log(regions.find((e) => (e.nom = e.nom)));
      let names = regions.find((e) => (e.nom = e.nom));
      document.getElementById(
        "searchs"
      ).innerHTML = `<option value="${names.nom}">`;
    });
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(crd);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
