export function calculateClassroomAverage(studentData) {
    const totalGrades = studentData.reduce((sum, student) => sum + student.averageGrade, 0);
    const averageGrade = totalGrades / studentData.length;

    return averageGrade;
}