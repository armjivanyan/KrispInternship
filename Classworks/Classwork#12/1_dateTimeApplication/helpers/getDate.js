const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export function getDate() {
  let today = new Date();
  today = today.toLocaleString("en-US", options);
  return today;
}
