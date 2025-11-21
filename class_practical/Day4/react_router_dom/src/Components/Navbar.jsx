import { Link } from "react-router-dom"

const Navbar = () => {
    const links = [{link:"String_render"},{link:"Number_render"},{link:"Ternary_render"},{link:"Optional_render"},
                   {link:"Template_literals"},{link:"Nullish_render"},{link:"Object_render"},{link:"Array_of_object_render"}]
  return(
    <>
        <div className="navbar">
      <div className="name">
          <h4>Priya Darshini Assignment</h4>
      </div>
      <div className="lifestyle">
        {/* {links.map((e,i)=>(

                  <Link to ={e.link}  key={i+1}>{e.link}</Link>
        ))} */}
        <Link className="linklist" to="/">Home</Link>
        <Link className="linklist" to="/String_render">String_render</Link>
        <Link className="linklist" to="/Number_render">Number_render</Link>
        <Link className="linklist"to="/Ternary_render">Ternary_render</Link>
        <Link className="linklist" to="/Optional_render">Optional_render</Link>
        <Link className="linklist"to="/Template_literals">Template_literals</Link>
        <Link className="linklist" to="/Nullish_render">Nullish_render</Link>
        <Link className="linklist" to="/Object_render">Object_render</Link>
        <Link className="linklist" to="/Array_of_object_render">Array_of_object_render</Link>
      
      </div>
    </div>

    </>
  )
}
export default Navbar