function calculateClassroomAverage(studentData) {
    const totalGrades = students.reduce((sum, student) => sum + student.averageGrade, 0);
    const averageGrade = totalGrades / students.length;

    return averageGrade;
}

export { calculateClassroomAverage };