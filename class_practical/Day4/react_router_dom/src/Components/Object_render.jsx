const Object_render = () => {
    const definition = "Object rendering means displaying object data on the webpage by accessing its keys/properties.You cannot render the whole object directly—only its values."
     const students = {ID: 1 , Name :"Priya", Course : "FullStack"}
             
  return(
    <>
    <h1>This  is object render</h1>
    <p>{definition}</p>
    <span>{students.ID }, {students.Name }, {students.Course}</span>
   
    <hr />
    </>
  )
}
export default Object_render