import React from "react";
import "../CSS Folder/TaskBar.css";
import { useContext } from "react";
import { MyContext } from "../context/myContext";

function TaskBar() {
  const { note, setNote, allNotes, setAllNotes } = useContext(MyContext);

  const hclick = () => {
    if (note !== "") {
      const newNote = { text: note, id: new Date().getTime() };

      const updatedNotes = [...allNotes, newNote];
      setAllNotes(updatedNotes);

      localStorage.setItem("allNotes", JSON.stringify(updatedNotes));

      setNote("");
    }
  };

  return (
    <>
      <div className="taskbar_container">
        <form onSubmit={hclick}>
          <input
            type="text"
            autoFocus
            value={note}
            placeholder="Take a note..."
            className="textbar"
            onChange={(e) => setNote(e.target.value)}
          />
        </form>
          <button onClick={hclick} className="addbtn">
            Add Note
          </button>
      </div>
    </>
  );
}

export default TaskBar;
