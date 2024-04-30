export default function cleanSet(s, startString) {
  return Array.from(s)
    .filter((item) => (startString ? item.startsWith(startString) : false))
    .map((item) => item.slice(startString.length))
    .join('-');
}
