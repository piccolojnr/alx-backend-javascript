interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "rahim",
    lastName: "daud",
    age: 13,
    location: "accra"
}
const student2: Student = {
    firstName: "rahim2",
    lastName: "daud2",
    age: 13,
    location: "accra"
}

const studentsList: Student[] = [
    student1, student2
]

const renderTable = () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
};

renderTable();

