function displayTime() {
  var dateTime = new Date();
  var day = dateTime.getDay();
  var dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = dateTime.getDate();
  var months = dateTime.getMonth();
  var monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var years = dateTime.getFullYear();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = hrs >= 12 ? "PM" : "AM";
  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.querySelector(".day").innerHTML =
    "Date: " +
    dayList[day] +
    ": " +
    date +
    ": " +
    monthsList[months] +
    ": " +
    years;
  document.querySelector(".time").innerHTML =
    "Current Time is: " + hrs + ":" + min + ":" + sec + ": " + session;
}
setInterval(displayTime, 10);
