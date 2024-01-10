import './App.css'
import TweetList from './components/TweetList'


const tweets = [
  {
    content: "Tweet 1",
    likes: 32,
    id: 1
  },
  {
    content: "Tweet 2",
    likes: 2,
    id: 2
  },
  {
    content: "Tweet 3",
    likes: 5,
    id: 3
  }
]

function App() {
 
  return (
    <>
      <TweetList tweets={tweets}/>
    </>
  )
}

export default App
