const Nullish_render = () => {
    const definition = "Nullish Rendering means: Render a fallback value when the main value is null or undefined.This uses the Nullish Coalescing Operator (??)."
    const nullish = null
    const not_nullish = "This is not nullish bcox the type is not null or undefined "

  return(
    <>
    <h1>This  is Nullish Coalescing render</h1>
    <p>{definition}</p>
   {nullish ?? <h4>This is Nullish Coalescing</h4>}

    {not_nullish ?? <h4>This is not Nullish Coalescing</h4>}
    <hr />
    </>
  )
}
export default Nullish_render