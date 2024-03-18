//converted dateToAlbanian: 01 Shkurt 2024
export const convertDateToAlbanian = (date) => {
  // Parse the input date string into a Date object
  const dateObject = new Date(date);
  // Define arrays for month names in Albanian and English
  const monthNamesAlbanian = [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nëntor",
    "Dhjetor",
  ];
  const monthNamesEnglish = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day, month, and year components
  const day = dateObject.getDate();
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();
  // Get the Albanian month name
  const monthNameAlbanian = monthNamesAlbanian[monthIndex];
  // Assemble the formatted date string
  const formattedDate = `${day} ${monthNameAlbanian} ${year}`;
  return formattedDate;
};

//Normal Date: 01/03/2024 => dd/mm/yyyy
export const convertDateToNormal = (date) => {
  const rawDate = date;

  const dateStep1 = rawDate ? new Date(rawDate) : null;

  const formattedDate = dateStep1
    ? `${("0" + dateStep1.getDate()).slice(-2)}/${(
        "0" +
        (dateStep1.getMonth() + 1)
      ).slice(-2)}/${dateStep1.getFullYear()}`
    : "";

  return formattedDate;
};

//formated time: 21:21 => HH:MM
export const formatTime = (time) => {
  const timeStep1 = time ? new Date(`1970-01-01T${time}`) : null;
  const formattedStartingTime = timeStep1
    ? `${("0" + timeStep1.getHours()).slice(-2)}:${(
        "0" + timeStep1.getMinutes()
      ).slice(-2)}`
    : "";

  return formattedStartingTime;
};
