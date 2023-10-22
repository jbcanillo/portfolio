function makeGreet(): string {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 5 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else if (hours >= 17 && hours < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function showClock() {
  const now = new Date();

  const year = now.getFullYear();
  const monthNames = [
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
  const month = monthNames[now.getMonth()];
  const day = String(now.getDate()).padStart(2, "0");

  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const formattedDate = `${month} ${day}, ${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  return `${formattedDate} ${formattedTime}`;
}

function abbreviateName(fullName: string): string {
  const nameParts = fullName.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  return initials;
}

export { makeGreet, showClock, abbreviateName };
