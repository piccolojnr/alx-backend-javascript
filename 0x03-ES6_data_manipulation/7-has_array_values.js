export default function hasValuesFromArray(s, arr) {
  let result = false;
  arr.forEach((item) => {
    result = false;
    if (s.has(item)) {
      result = true;
    }
  });
  return result;
}
