const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div"); // Changed to div
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    img.className = "delete-icon";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage();
});

// Handle delete and typing
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Save on typing in any note
notesContainer.addEventListener("keyup", function() {
    updateStorage();
});
