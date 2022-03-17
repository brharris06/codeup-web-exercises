function GetInfo() {
    var newName = document.getElementsByID("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid= WEATHER_TOKEN')       .then(response => response.json())
        .then(data => {

            //Getting the min and max values for each day
            for(i = 0; i<5; i++){
                document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for(i = 0; i<5; i++){
                document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
}

