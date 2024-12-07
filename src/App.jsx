
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
import Products from './Components/Products'
import ProductDetails  from './Components/ProductDetails'
import Cart from './Components/Cart'


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route>
      <Route index element = {<Landing/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>}/>
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>}/>

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
