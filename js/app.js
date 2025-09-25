document.addEventListener('DOMContentLoaded', function () {
  // ==================== STUDENT ====================
  const addStudentButton = document.getElementById('addStudentButton');
  const studentTable = document.getElementById('table-content');

  function addStudent() {
      const idNumber = document.getElementById('idNumber').value.trim();
      const firstName = document.getElementById('firstName').value.trim();
      const middleName = document.getElementById('middleName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();

      if (idNumber && firstName && middleName && lastName) {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${idNumber}</td>
              <td>${firstName}</td>
              <td>${middleName}</td>
              <td>${lastName}</td>
              <td>
                  <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                  <button class="btn btn-danger btn-sm delete-btn">Delete</button>
              </td>
          `;

          studentTable.appendChild(newRow);

          // Clear form fields
          document.getElementById('studentForm').reset();

          // Attach actions
          attachRowActions(newRow, "student");
      } else {
          alert('Please fill out all fields.');
      }
  }

  addStudentButton.addEventListener('click', addStudent);

  // ==================== SUBJECT ====================
  const addSubjectButton = document.getElementById('addSubject');
  const subjectTable = document.getElementById('table-content');

  function addSubject() {
      const subjectCode = document.getElementById('subjectCode').value.trim();
      const subjectName = document.getElementById('subjectName').value.trim();
      const units = document.getElementById('units').value.trim();

      if (subjectCode && subjectName && units) {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td>${subjectCode}</td>
              <td>${subjectName}</td>
              <td>${units}</td>
              <td>
                  <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                  <button class="btn btn-danger btn-sm delete-btn">Delete</button>
              </td>
          `;

          subjectTable.appendChild(newRow);

          // Clear input fields
          document.getElementById('subjectCode').value = '';
          document.getElementById('subjectName').value = '';
          document.getElementById('units').value = '';

          // Attach actions
          attachRowActions(newRow, "subject");
      } else {
          alert('Please fill out all fields.');
      }
  }

  addSubjectButton.addEventListener('click', addSubject);

  // ==================== COMMON EDIT/DELETE ====================
  function attachRowActions(row, type) {
      const editBtn = row.querySelector('.edit-btn');
      const deleteBtn = row.querySelector('.delete-btn');

      // DELETE
      deleteBtn.addEventListener('click', () => row.remove());

      // EDIT
      editBtn.addEventListener('click', () => {
          if (type === "student") {
              document.getElementById('idNumber').value = row.children[0].textContent;
              document.getElementById('firstName').value = row.children[1].textContent;
              document.getElementById('middleName').value = row.children[2].textContent;
              document.getElementById('lastName').value = row.children[3].textContent;
          } else if (type === "subject") {
              document.getElementById('subjectCode').value = row.children[0].textContent;
              document.getElementById('subjectName').value = row.children[1].textContent;
              document.getElementById('units').value = row.children[2].textContent;
          }

          row.remove(); // remove the old row so when re-added it updates
      });
  }
});
