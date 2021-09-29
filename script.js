setInterval(function () {
  let currentDate = new Date();

  let day = getSpelledDay(currentDate.getDay());
  let month = getSpelledMonth(currentDate.getMonth());

  let dte = currentDate.getDate();
  let yr = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let morningAfternoon = "";
  let amPM;
  if (hour > 12 && hour < 18) {
    hour = hour - 12;
    morningAfternoon = "Afternoon";
    amPM = "P.M.";
  }
  else if(hour >= 18) {
    hour = hour - 12;
    morningAfternoon = "Night";
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

function getSpelledDay(day) {
  switch (day) {
    case 0:
      return  "Sunday";
      break;
    case 1:
      return  "Monday";
      break;
    case 2:
      return  "Tuesday";
      break;
    case 3:
      return  "Wednesday";
      break;
    case 4:
      return  "Thursday";
      break;
    case 5:
      return  "Friday";
      break;
    case 6:
      return  "Saturday";
      break;
  }
}

function getSpelledMonth(month) {
  switch (month) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
      return "December";
      break;
  }
}
