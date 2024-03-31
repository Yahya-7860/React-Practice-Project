
import Game from './components/Game';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          ></Route>
          <Route
            exact
            path='/game'
            element={<Game />}
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <Error/> */}
    </>
  )
}

export default App
