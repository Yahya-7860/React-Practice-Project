import "./App.css";
import Form from "./components/Form";
import ContactText from "./components/ContactText";
import ContactImage from "./components/ContactImage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="w-2/3">
          <div className="flex flex-col gap-10">
            <ContactText />
            <div className="flex">
              <Form />
              <ContactImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
