const button = document.getElementById("get-location-button");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=6ad05a8468dc49b9b7982048242202&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedToGet() {
  console.log("There was some issue");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});
