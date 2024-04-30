export default function getListStudentIds(arr) {
  if (arr instanceof Array) return arr.map((x) => x.id);
  return [];
}
