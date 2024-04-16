let am_pm = document.querySelector(".am-pm");
let week_day_out = document.querySelector(".week-day");
let month_out = document.querySelector(".month");
let date_out = document.querySelector(".date");
let year_out = document.querySelector(".year");

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_name = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let week_day = d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();

    let am = hour < 12 ? "AM" : "PM";
    hour = hour = hour < 10 ? "0" + hour : hour;
    hour = hour > 12 ? hour - 12 : hour;

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    hour_set = document.querySelector(".hour");
    min_set = document.querySelector(".minute");
    sec_set = document.querySelector(".second");

    am_pm.textContent = am;


    hour_set.textContent = hour + " : ";
    min_set.textContent = minute + " : ";
    sec_set.textContent = second;

    week_day_out.textContent = weekday[week_day];
    month_out.textContent = month_name[month];
    date_out.textContent = date;
    year_out.textContent = year;

}

updateTime();
setInterval(updateTime, 100);


