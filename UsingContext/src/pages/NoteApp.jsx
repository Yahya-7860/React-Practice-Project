import React, { useEffect } from "react";
import "../App.css";
import NoteCard from "../components/NoteCard";
import TaskBar from "../components/TaskBar";
import { useContext } from "react";
import { MyContext } from "../context/myContext";

function NoteApp() {
  const { allNotes, setAllNotes } = useContext(MyContext);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("allNotes"));
    if (storedNotes) {
      setAllNotes(storedNotes);
    }
  }, [setAllNotes]);

  return (
    <div>
      <div className="main_app_container">
        <div className="app_container">
          <TaskBar />
          <div className="noteCardGrid">
            {allNotes ? (
              allNotes.slice(0).reverse().map((OneNote) => (
                <NoteCard key={OneNote.id} note={OneNote.text} id={OneNote.id} />
              ))
            ) : (
              <p>No notes available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteApp;
