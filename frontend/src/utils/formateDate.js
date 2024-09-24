export const formatDate = (date, config) => {
  const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOptions;

  // Directly use the date string with the Date constructor
  const parsedDate = new Date(date);

  // Check if the date is valid
  if (isNaN(parsedDate.getTime())) {
    console.error("Invalid date format provided:", date);
    return "";
  }

  return parsedDate.toLocaleDateString("en-US", options);
};
