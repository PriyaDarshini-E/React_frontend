import Navbar from "./Components/Navbar"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import String_render from "./Components/String_render"
import Number_render from "./Components/Number_render"
import Ternary_render from "./Components/Ternary_render"
import Optional_render from "./Components/Optional_render"
import Template_literals from "./Components/Template_literals"
import Nullish_render from "./Components/Nullish_render"
import Object_render from "./Components/Object_render"
import Array_of_object_render from "./Components/Array_of_object_render"
import Homepage from "../Components/Homepage"

const App = () => {
  return(
    <>
    <Navbar/>
    {/* {Routes} */}
    <Routes>
      <Route path="/" element={<Homepage/>}>  </Route>
    </Routes>

    
    
   </>
  )
}
export default App