function calAge(DOB) {
  var today = new Date();
  const { dobDay, dobMonth, dobYear } = DOB;
  const dobDate = new Date(dobYear, dobMonth, dobDay);
  var totalMonths =
    (today.getFullYear() - dobYear) * 12 + today.getMonth() - dobMonth;
  totalMonths += today.getDay() < dobDay ? -1 : 0;
  var years = today.getFullYear() - dobYear;
  if (dobMonth > today.getMonth()) years = years - 1;
  else if (dobMonth === today.getMonth())
    if (dobDate.getDate() > today.getDate()) years = years - 1;

  var days;
  var months;

  if (dobDate.getDate() > today.getDate()) {
    months = totalMonths % 12;
    if (months == 0) months = 11;
    var x = today.getMonth();
    switch (x) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        var a = dobDate.getDate() - today.getDate();
        days = 31 - a;
        break;
      }
      default: {
        var a = dobDate.getDate() - today.getDate();
        days = 30 - a;

        break;
      }
    }
  } else {
    days = today.getDate() - dobDate.getDate();
    if (dobMonth === today.getMonth()) months = totalMonths % 12;
    else months = (totalMonths % 12) + 1;
  }
  //   var age = years + " years " + months + " months " + days + " days";
  return { days, months, years };
}
export default calAge;
