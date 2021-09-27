export default function MyMap(){

  const data = [
    { name: "Miguel", age: 32 },
    { name: "Erol", age: 38 },
    { name: "Daria", age: 32},
    { name: "Giovanni", age: 33 },
    { name: "Polina", age: 34 }
  ]

  return(
    <div>
      {data.map((student, index) => {
        //added a key, so React can keep track of every element in the list
        //ideally, we want the id to be key
        //if not available, we use index (second argument passed to map())
        return (
          <div key={index}>
            <p><b>{student.name}</b>, {student.age}</p>
          </div>
      )})}
    </div>
  )
}