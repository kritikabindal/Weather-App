const country = document.getElementById("country");
const day = document.getElementById("day");
const temperature = document.getElementById("temp");
const visible = document.getElementById("visibility");
const minTemp = document.getElementById("min");
const maxTemp = document.getElementById("max");
// const inpValue=document.getElementById("inpVal").value;
const search = document.getElementById("search");

// const apiKey="2a691ffa4ac79e251946c54392474152";
// inpValue=inpVal.value;

search.addEventListener("click", () => {
  const inpValue = document.getElementById("inpVal").value;
  const apiKey = "2a691ffa4ac79e251946c54392474152";
  console.log(inpValue, apiKey);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //data from API 
      let curr_temp = parseFloat(data.main.temp);
      let min_temp = parseFloat(data.main.temp_min);
      let max_temp = parseFloat(data.main.temp_max);
      let city_name = data.name;
      let weth = data.weather[0].main;

      //data sent to browser
      temperature.innerText = curr_temp + " ℃";
      minTemp.innerHTML = min_temp + " ℃";
      maxTemp.innerText = max_temp + " ℃";
      country.innerText = data.name;
      visible.innerText = weth;
    })
})