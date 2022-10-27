import {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import ReactDOM from "react-dom";
import Loading from "react-fullscreen-loading";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "modules/Authentication/pages/Login";
const Home = lazy(()=> import("./modules/Home/pages/Home"))
const Movie = lazy(()=> import("./modules/Movie/pages/Movie"))


function App() {
  return (
    <>
    <Suspense fallback={<Load/>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* dynamic url */}
      <Route path="/movie/:movieId" element={<Movie/>}/>
      {/* <Route path="checkout/:checkoutId" element={<CheckoutRoute><h1>Check Out Component</h1></CheckoutRoute>}/> */}
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/register" element={<Register/>}/> */}
    </Routes>
    </Suspense>
    </>
  )
  
}
export default App;


function Load() {
  return <Loading loading={true} background="#f0f0f0" loaderColor="#3498db" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Load />, rootElement);