export default function iterateThroughObject(reportWithIterator) {
  return Array.from(reportWithIterator).map((item) => item).join(' | ');
}
