//destructuring props
export default function AnimalsCard({name, pet}){

  return(
    <div>
      <p><b>Name: </b>{name}</p>
      {/* we can't display true or false directly, need to convert it to something valid, like string */}
      <p><b>Pet:</b> {pet ? "Yes, it can be a pet " : "Not a pet (for the normal user)"} </p>
    </div>
  )
}