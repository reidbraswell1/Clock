setInterval(function () {
  let currentDate = new Date();
  console.log(currentDate);
  let day;
  switch (currentDate.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tusday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  let month;
  switch (currentDate.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  let dte = currentDate.getDate();
  let yr = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let morningAfternoon = "";
  let amPM;
  if (hour > 12) {
    hour = hour - 12;
    morningAfternoon = "Afternoon";
    amPM = "P.M.";
  } else {
    morningAfternoon = "Morning";
    amPM = "A.M.";
  }
  let min = currentDate.getMinutes();
  let minString = min.toString();
  if (minString.length < 2) {
    minString = "0" + minString;
  }
  document.getElementById("day").innerText = day.toUpperCase();
  document.getElementById("morning-afternoon").innerText = morningAfternoon;
  document.getElementById("time").innerText = `${hour}:${minString}`;
  document.getElementById("am-pm").innerText = amPM;
  document.getElementById(
    "date"
  ).innerText = `${month.toUpperCase()} ${dte},${yr}`;
}, 1000);
