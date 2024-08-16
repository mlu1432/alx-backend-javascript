// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two students
const student1: Student = {
    firstName: "Lucas",
    lastName: "Sekwati",
    age: 20,
    location: "Pretoria"
};

const student2: Student = {
    firstName: "Thabang",
    lastName: "Sithole",
    age: 22,
    location: "Durban"
};

// 3. Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// 4. Using Vanilla JavaScript, render a table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
