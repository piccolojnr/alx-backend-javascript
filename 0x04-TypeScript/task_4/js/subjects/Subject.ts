// task_4/js/subjects/Subject.ts

namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher;

        setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }
    }
}
