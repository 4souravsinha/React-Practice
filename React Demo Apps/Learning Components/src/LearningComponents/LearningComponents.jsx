import DogTile from './DogTile'


function LearningComponents() {
  return (
    <div style={{display:"flex", gap:'5rem'}}>
      <DogTile imgURL="https://wtamu.edu/~cbaird/sq/images/dog2.jpg" imgDescription={"Hello From Doge"}>
        <p>Miwek</p>
      </DogTile>
      <DogTile imgURL="https://wtamu.edu/~cbaird/sq/images/dog2.jpg" imgDescription="A smiling Norwich Terrier">
        {/* <p>Dogeshwari</p> */}
      </DogTile>
    </div>
  )
}

export default LearningComponents
