export default function updateStudentGradeByCity(arr, ct, ng) {
  const filterArr = arr.filter((x) => x.location === ct);

  const gradeArr = filterArr.map((x) => {
    for (const gradeInfo of ng) {
      if (x.id === gradeInfo.studentId) {
        x.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (x.grade === undefined) {
      x.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return x;
  });
  return gradeArr;
}
