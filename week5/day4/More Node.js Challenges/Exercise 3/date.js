import Holidays from "date-holidays";

export function nextHoliday() {
  const now = new Date();
  const today = now.toLocaleDateString();

  const hd = new Holidays("MA"); 
  const holidays = hd.getHolidays(now.getFullYear());

  const upcoming = holidays.find((h) => new Date(h.date) > now);

  if (!upcoming) {
    return `📅 Today is ${today}.
❌ No upcoming holidays found for this year.`;
  }

  const holidayName = upcoming.name;
  const holidayDate = new Date(upcoming.date);

  const diff = holidayDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `📅 Today is ${today}.
The next holiday is 🎉 ${holidayName} (${holidayDate.toDateString()}),
in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}
