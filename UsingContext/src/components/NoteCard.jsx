import React, { useContext } from "react";
import "../CSS Folder/NoteCard.css";
import { MyContext } from "../context/myContext";
import "../CSS Folder/TaskBar.css"

function NoteCard({ note, id }) {
  const { allNotes, setAllNotes } = useContext(MyContext);

  const hclick = () => {
    const updatedNotes = allNotes.filter((OneNote) => OneNote.id !== id);
    
    setAllNotes(updatedNotes);

    localStorage.setItem("allNotes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="cardTextContainer">
      <p className="cardText">
        {note}
        <br />
        <br />
        <i onClick={hclick} className="fa-solid fa-trash addbtn"></i>
      </p>
    </div>
  );
}

export default NoteCard;
