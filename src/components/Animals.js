import AnimalsCard from "./AnimalsCard"

//don't forget to export your components
export default function Animals(){

  const data = [
    { animal: "dog", pet: true },
    { animal: "tiger", pet: false },
    { animal: "cat", pet: true },
    { animal: "rabbit", pet: true },
    { animal: "crocodile", pet: false }
  ]

  return(
    <div>
      {/* not that we return right after the arrow */}
      {/* possible since we are only returning one thing */}
      {data.map((animal, index) => <AnimalsCard key={index} name={animal.animal} pet={animal.pet}/>)}
    </div>
  )
}