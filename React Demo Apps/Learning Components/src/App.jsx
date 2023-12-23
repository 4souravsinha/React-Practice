import './App.css'
import DogTile from './DogTile'


function App() {
  return (
    <>
      <DogTile imgURL="https://wtamu.edu/~cbaird/sq/images/dog2.jpg" imgDescription={"Hello From Doge"}>
        <p>Miwek</p>
      </DogTile>
      <DogTile imgURL="https://wtamu.edu/~cbaird/sq/images/dog2.jpg" imgDescription="A smiling Norwich Terrier">
        {/* <p>Dogeshwari</p> */}
      </DogTile>
    </>
  )
}

export default App
