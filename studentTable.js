import studentData from './studentData.js';

import { calculateClassroomAverage } from './calculateClassroomAverage.js';

//////////////////////////////////////////////////////////////////////////////////

function renderStudentTable(table, data) {
    const tableElement = table;

    for (let i = 0; i < data.length; i++) {
        const student = data[i];

        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = student.id;

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;

        const addressCell = document.createElement('td');
        addressCell.textContent = student.address;

        const gradeCell = document.createElement('td');

        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.value = student.averageGrade;
        gradeInput.setAttribute('data-index', i);
        gradeInput.addEventListener('change', function(event) {
            updateGrade(event.target);
        });

        gradeCell.appendChild(gradeInput);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(gradeCell);

        tableElement.appendChild(row);
    }
}

function updateGrade(input) {
    const dataIndex = input.getAttribute('data-index');
    const newGrade = parseFloat(input.value);

    if (dataIndex !== null && !isNaN(newGrade)) {
        studentData[dataIndex].averageGrade = newGrade;

        const newClassroomAverage = calculateClassroomAverage(studentData);
        
        document.getElementById('classroomAverage').textContent = newClassroomAverage;
        
        console.log('Updated Student Data:', studentData);
        console.log('Classroom Average:', newClassroomAverage);
    } else {
        console.error('Invalid grade');
    }
}

export { renderStudentTable, updateGrade };