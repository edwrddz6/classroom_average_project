import { renderStudentTable, updateGrade } from './studentTable.js';
import { calculateClassroomAverage } from './calculateClassroomAverage.js';
import studentData from './studentData.js';

const tableElement = document.querySelector('#student-table tbody');
renderStudentTable(tableElement, studentData);

const inputs = document.querySelectorAll('#student-table tbody input');
inputs.forEach(input => {
    input.addEventListener('change', updateGrade);
});

const classroomAverageElement = document.getElementById('classroomAverage');
const classroomAverage = calculateClassroomAverage(studentData);
classroomAverageElement.textContent = classroomAverage.toFixed(2);