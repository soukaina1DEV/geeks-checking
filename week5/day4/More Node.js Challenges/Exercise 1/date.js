export function timeUntilNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `🎉 The 1st January is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}
