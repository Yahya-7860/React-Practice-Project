import React from "react";
import LoginPage from "./components/LoginPage";
import SignupOPage from "./components/SignupOPage";
import Room from "./pages/Room"
import { ToastContainer, toast } from 'react-toastify';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />

          <Route
            path="/room"
            element={<PrivateRoute Component={Room} />}
          />

          <Route
            path="/signup"
            element={<SignupOPage />}
          />
        </Routes>

      </BrowserRouter>
      <ToastContainer position='bottom-right' />

    </>
  )
}

export default App
