interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Hayes",
    age: 25,
    location: "New York",
  },
  {
    firstName: "Jason",
    lastName: "Hayes",
    age: 28,
    location: "Los Angeles",
  },
];

function renderTable() {
  const table = document.createElement("table");

  //Create table header
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell();
  const header2 = headerRow.insertCell();
  header1.textContent = "First Name";
  header2.textContent = "Location";

  //Create table row for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  //Append the table to the body
  document.body.appendChild(table);
}

renderTable();
