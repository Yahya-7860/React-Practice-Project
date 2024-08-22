import { useState } from "react";
import "./App.css";
import { MyContext } from "./context/myContext";
import NoteApp from "./pages/NoteApp";

function App() {
  const [note, setNote] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  return (
    <MyContext.Provider value={{ note, setNote, allNotes, setAllNotes }}>
      <NoteApp />
    </MyContext.Provider>
  );
}

export default App;
