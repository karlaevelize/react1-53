//don't forget to export your components
export default function Button(){
  
  // function clickMe(){
  //  console.log("click me")
  // }

  //same function written with different syntax
  //you can choose arrow or normal functions
  const clickMe = () => {
    console.log("click me")
  }

  return (
    <div>
      <button onClick={clickMe}>Click me</button><br/><br/>
      {/* different way to use onClick */}
      {/* writing the function directly on it */}
      {/* nice for short functions */}
      <button onClick={() => console.log("clicked")}>Click me</button>
    </div>
  )
}