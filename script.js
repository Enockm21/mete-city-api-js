const search = document.getElementById("search");
const searchSubmit = document.getElementById("submit");

searchSubmit.addEventListener("click", function () {
  let city = search.value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=03b7774c0ed3e399c3cfe5d14297a461";
  fetch(url)
    .then(function (res) {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
    })

    .then(function (regions) {
      console.log(regions);
      document.getElementById("title").innerHTML = regions.wind.speed;
      console.log(regions.wind.speed);
    })

    .catch(function (err) {
      // Une erreur est survenue

      console.log(err, "error");
    });
});
