const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const temp_real_val = document.getElementById("temp_real_val");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `plz write the name before search`;
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e1b2adfed5b4d644dcbfe8ec704112c2`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;
            //   condition to check sunny or cloudy
            if (tempStatus == "Sunny") {
                temp_status.innerHTML = `<i class=" fa-sun fas" style="color: #eccc68"></i>`;
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML = `<i class="fa-cloud  fas" style="color: #f1f2f6"></i>`;
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML = `<i class="fa-cloud-rain  fas" style="color: #a4b0be"></i>`;
            } else {
                temp_status.innerHTML = `<i class="fa-cloud  fas" style="color: #eccc68"></i>`;
            }
            const getCurrentDay = () => {
                var weekday = new Array(7);
                weekday[0] = "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thur";
                weekday[5] = "Fir";
                weekday[6] = "Sat";
                let currentTime = new Date();
                let days = weekday[currentTime.getDay()];
                let day = document.getElementById("day");
                day.innerText = days;
            };
            getCurrentDay();

            const getCurrentTime = () => {
                var months = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                ];
                var now = new Date();
                var month = months[now.getMonth()];
                let today_data = document.getElementById("today_data");
                today_data.innerText = month;
            };
            getCurrentTime();
            const getCurrentDate = () => {
                var dates = [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                ];
                var now = new Date();
                var date = dates[now.getDate() - 1];
                let today_date = document.getElementById("today_date");
                today_date.innerText = date;
            };
            getCurrentDate();
            datahide.classList.remove("data_hide");
        } catch {
            city_name.inputText = `plz enter the city name properly`;
            datahide.classList.add("data_hide");
        }
    }
};

submitBtn.addEventListener("click", getInfo);