export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let value of array) {
    value = appendString + value;
    newArray.push(value);
  }

  return newArray;
}
