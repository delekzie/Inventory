
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//pages 
import Landing from "./Components/Landing"
import Login from './Components/Login' 
import NotFound from './Components/NotFound'
import Register from './Components/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element = {<Landing/>}/>

      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>}/>

      {/* custom 404 page */}
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
