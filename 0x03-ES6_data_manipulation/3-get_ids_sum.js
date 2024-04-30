export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) return arr.reduce((a, c) => a + c.id, 0);
  return 0;
}
