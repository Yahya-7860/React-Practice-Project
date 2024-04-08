import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import FirstLogin from "./components/FirstLogin";
import Signup from "./components/Signup";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<FirstLogin />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />

        </Routes>
      </BrowserRouter>

      <ToastContainer position="bottom-center" />


    </>
  )
}

export default App
