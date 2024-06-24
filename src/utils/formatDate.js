export default function formatDateString(isoString) {
  const date = new Date(isoString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
