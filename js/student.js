document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addStudentButton");
  const tableContent = document.getElementById("table-content");
  const form = document.getElementById("studentForm");

  let editRow = null; // Track row being edited

  addButton.addEventListener("click", function () {
    const idNumber = document.getElementById("idNumber").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    if (!idNumber || !firstName || !lastName) {
      alert("Please fill in ID, Firstname, and Lastname.");
      return;
    }

    if (editRow) {
      // 🔄 Update existing row
      editRow.cells[0].textContent = idNumber;
      editRow.cells[1].textContent = firstName;
      editRow.cells[2].textContent = middleName;
      editRow.cells[3].textContent = lastName;

      editRow = null;
      addButton.textContent = "Add Student"; // Reset button label
    } else {
      // ➕ Create new row
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-warning editBtn">Edit</button>
                    <button type="button" class="btn btn-sm btn-danger deleteBtn">Delete</button>
                </td>
            `;
      tableContent.appendChild(row);
    }

    form.reset();
  });

  // 🎯 Event delegation for Edit/Delete
  tableContent.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.closest("tr").remove();
    }

    if (e.target.classList.contains("editBtn")) {
      editRow = e.target.closest("tr");

      // Fill form with row data
      document.getElementById("idNumber").value = editRow.cells[0].textContent;
      document.getElementById("firstName").value = editRow.cells[1].textContent;
      document.getElementById("middleName").value =
        editRow.cells[2].textContent;
      document.getElementById("lastName").value = editRow.cells[3].textContent;

      addButton.textContent = "Update Student"; // Change button text
    }
  });
});
