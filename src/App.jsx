import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ProtectedRoute,Error,Landing,Register,Login} from "./pages"
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'

//Dashboard
import {
  SharedLayout,
  Dashboard,
  Stats,
  Courses,
  Profile,
  AddCourse,
} from './pages/Dashboard'

/**
 * element:<ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>,
 */
const routes = createBrowserRouter([
  {
    path:'/',
    element:<SharedLayout />,
    errorElement:<Error />,
    children: [
      {
        index:true,
        element: <Dashboard />,
      },
      {
        path:'status',
        element: <Stats />
      },
      {
        path:'courses',
        element: <Courses />,

      },
      {
        path:'profile',
        element: <Profile/>,
      },
      {
        path:'add',
        element:<AddCourse />
      }
    ]

  },
  {
    index:true,
    path:'landing',
    element:<Landing />
  },
  {
    path:'register',
    element:<Register />,
  },
  {
    path:'login',
    element:<Login />,
  },
 
 ])

function App() {

  return (
   <>
    <RouterProvider router={routes} />
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
   </>
  )
}

export default App
