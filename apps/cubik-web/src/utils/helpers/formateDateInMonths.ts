export const formateDateInMonths = (date?: Date | string): string => {
  if (!date) return "";

  let parsedDate = typeof date === "string" ? new Date(date) : date;

  if (
    Object.prototype.toString.call(parsedDate) !== "[object Date]" ||
    isNaN(parsedDate.getTime())
  ) {
    console.error(`Invalid date: ${date}`);
    return "";
  }

  let day = String(parsedDate.getDate()).padStart(2, "0");

  let monthIndex = parsedDate.getMonth();
  let monthNames = [
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
  let monthName = monthNames[monthIndex];

  let year = parsedDate.getFullYear();

  let formattedDate = `${day} ${monthName} ${year}`;

  return formattedDate;
};
