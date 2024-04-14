function updateTime() {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    hour = hour = hour < 10 ? "0" + hour : hour;
    hour = hour > 12 ? hour - 12 : hour;

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hour_set = document.querySelector(".hour");
    min_set = document.querySelector(".minute");
    sec_set = document.querySelector(".second");

    hour_set.textContent = hour + " : ";
    min_set.textContent = minute + " : ";
    sec_set.textContent = second;
}

updateTime();
setInterval(updateTime, 100);
