export default function getStudentsByLocation(arr, ct) {
  if (arr instanceof Array) return arr.filter((x) => x.location === ct);
  return [];
}
