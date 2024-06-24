function getTodaysDate() {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);

  return formattedDate.replace(/,(\s\d{4})$/, "$1");
}

export default getTodaysDate;
