import trueimg from "../assets/Images/true.jpg"
import falseimg from "../assets/Images/false.jpg"


const Ternary_render = () => {
    const definition = "A ternary is a short if-else written in one line. Ternary Rendering means using this ternary operator to render different UI/text based on a condition."
    const on = true;

  return(
    <>
    <h1>This  is Conditional Rendering using ternary operator</h1>
    <p>{definition}</p>
    {on ? <img src={trueimg}></img> : <img src={falseimg}></img> }
    <hr />
    </>
  )
}
export default Ternary_render