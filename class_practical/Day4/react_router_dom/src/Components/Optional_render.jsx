import trueimg from "../assets/Images/true.jpg"
import falseimg from "../assets/Images/false.jpg"


const Optional_render = () => {
    const definition = "Optional Rendering means: Render something only if the value exists or if condt wants true no need of false part(is not null, not undefined)."
    const on = true;

  return(
    <>
    <h1>This  is Conditional Rendering using Optional render</h1>
    <p>{definition}</p>
    {on && <img src={trueimg}></img>}
    <hr />
    </>
  )
}
export default Optional_render