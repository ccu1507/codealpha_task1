let dob = document.getElementById('birthDate');
let currentDate = document.getElementById('currentDate')
let output = document.getElementById('output');
document.getElementById("calculateBtn").addEventListener('click', () => {
  if (dob.value == "" || currentDate.value == "") {
    output.innerHTML = "Please enter the dates";
  } else {
    calculateAgeDifference(dob.value, currentDate.value);
  }
});
function calculateAgeDifference(start, end) {
  let dobYear = parseInt(start.substring(0, 4), 10);
  let dobMonth = parseInt(start.substring(5, 7), 10);
  let dobDay = parseInt(start.substring(8, 10), 10);
  let currentdateYear = parseInt(end.substring(0, 4), 10);
  let currentdateMonth = parseInt(end.substring(5, 7), 10);
  let currentdateDay = parseInt(end.substring(8, 10), 10);

  let yearAgeDiff = currentdateYear - dobYear;

  let monthAgeDiff;
  if (currentdateMonth >= dobMonth) {
    monthAgeDiff = currentdateMonth - dobMonth;
  } else {
    yearAgeDiff--;
    monthAgeDiff = 12 + currentdateMonth - dobMonth;
  }
  let dateAgeDiff;
  if (currentdateDay >= dobDay) {
    dateAgeDiff = currentdateDay - dobDay;
  } else {
    monthAgeDiff--;
    noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
    dateAgeDiff = noOfDaysInDOB + currentdateDay - dobDay;
    if (monthAgeDiff < 0) {
      monthAgeDiff = 11;
      yearAgeDiff--;
    }

  }
  output.innerHTML = "The difference is: " + yearAgeDiff + " Years " + monthAgeDiff + " month " + dateAgeDiff + " days. ";
}
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}