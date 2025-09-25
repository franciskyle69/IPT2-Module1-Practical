// subject.js

document.addEventListener("DOMContentLoaded", function () {
    const subjectForm = document.getElementById("subjectForm");
    const addBtn = document.getElementById("addSubject");
    const tableContent = document.getElementById("table-content");

    addBtn.addEventListener("click", function () {
        const subjectCode = document.getElementById("subjectCode").value.trim();
        const subjectName = document.getElementById("subjectName").value.trim();
        const units = document.getElementById("units").value.trim();

        // Validation
        if (!subjectCode || !subjectName || !units) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new row
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${subjectCode}</td>
            <td>${subjectName}</td>
            <td>${units}</td>
            <td>
                <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;

        tableContent.appendChild(tr);

        // Clear input fields
        document.getElementById("subjectCode").value = "";
        document.getElementById("subjectName").value = "";
        document.getElementById("units").value = "";

        // Delete subject
        tr.querySelector(".delete-btn").addEventListener("click", function () {
            tr.remove();
        });

        // Edit subject
        tr.querySelector(".edit-btn").addEventListener("click", function () {
            document.getElementById("subjectCode").value = tr.children[0].textContent;
            document.getElementById("subjectName").value = tr.children[1].textContent;
            document.getElementById("units").value = tr.children[2].textContent;

            tr.remove();
        });
    });
});
