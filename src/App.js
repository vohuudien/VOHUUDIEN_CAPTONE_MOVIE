import {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = lazy(()=> import("./modules/Home/pages/Home"))
const Movie = lazy(()=> import("./modules/Movie/pages/Movie"))


function App() {
  return (
    <>
    <Suspense fallback={<h1>...Loading</h1>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* dynamic url */}
      <Route path="/movie/:movieId" element={<Movie/>}/>
      {/* <Route path="checkout/:checkoutId" element={<CheckoutRoute><h1>Check Out Component</h1></CheckoutRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> */}
    </Routes>
    </Suspense>
    </>
  )
}

export default App;
