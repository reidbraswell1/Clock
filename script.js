setInterval(function () {
    let currentDate = new Date();
    console.log(currentDate);
    let day = "";
    switch(currentDate.getDay()) {
        case 5:
            day = "Friday";
            break;
    }
    let month = "";
    switch(currentDate.getMonth()) {
        case 8:
            month = "September";
            break;
    }
    let dte = currentDate.getDate();
    let yr = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let morningAfternoon = ""
    let amPM;
    if(hour > 12) {
        hour = hour - 12;
        morningAfternoon = "Afternoon";
        amPM = "P.M."
    }
    else {
        morningAfternoon = "Morning";
        amPM = "A.M."
    }
    let min = currentDate.getMinutes();
    let minString = min.toString();
    if(minString.length < 2) {
        minString = "0" + minString;
    }
    document.getElementById("day").innerText=day.toUpperCase();
    document.getElementById("morning-afternoon").innerText=morningAfternoon;
    document.getElementById("time").innerText=`${hour}:${minString}`;
    document.getElementById("am-pm").innerText=amPM;
    document.getElementById("date").innerText=`${month.toUpperCase()} ${dte},${yr}`;
}, 1000);
