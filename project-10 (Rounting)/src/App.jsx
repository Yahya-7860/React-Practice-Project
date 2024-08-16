import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Requests from './pages/Requests'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /> <Dashboard /></>
    },
    {
      path: '/requests',
      element: <><Navbar/><Requests /></>
    },
    {
      path: '/profile',
      element: <><Navbar/><Profile /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
