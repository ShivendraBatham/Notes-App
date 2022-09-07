showNotes();

let btnAddNote = document.getElementById("addNote");
btnAddNote.addEventListener("click", function (e) {
  let noteText = document.getElementById("noteText");
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(noteText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  noteText.value = "";
  showNotes();
});

//Display Notes
function showNotes() {
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";

  notesObj.forEach(function(element, index){
    html += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)"
            class="btn btn-danger">Delete</button>
        </div>
      </div>
    `;
  });

  let notesElm = document.getElementById("notes");
  if(notesObj.length != 0){
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show, Please add some notes`;
  }
}

//Deleting a Note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}