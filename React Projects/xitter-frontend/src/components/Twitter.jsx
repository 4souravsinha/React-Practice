import { useState } from "react"
import AddTweet from "./AddTweet"
import TweetList from "./TweetList"
const dummytweets = [
  {
    content: "Tweet 1",
    likes: 32,
    id: 1,
    createdAt: new Date()
  },
  {
    content: "Tweet 2",
    likes: 2,
    id: 2,
    createdAt: new Date()
  },
  {
    content: "Tweet 3",
    likes: 5,
    id: 3,
    createdAt: new Date()
  }
]
const Twitter = () => {
  const [tweets, setTweets] = useState(dummytweets)
  const handleAddTweet = (tweet) => {
    const newTweet = {
      content: tweet,
      likes: Math.floor(Math.random() * 100),
      id: tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0,
      createdAt: new Date()
    }
    setTweets([...tweets, newTweet])
  }
  const handleEditTweet=(newtweet, tweetId)=>{
    const temptweets = [...tweets]
    const filteredTweet = temptweets.filter((tweet)=>tweet.id === tweetId)
    filteredTweet[0].content = newtweet;
    setTweets(temptweets)
  }
  const handleSortTweets=()=>{
    const temptweets = tweets.map((val)=>val)
    temptweets.sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
    setTweets(temptweets)
  }
  return (
    <div>
      <AddTweet handleAddTweet={handleAddTweet} />
      <button onClick={handleSortTweets}>Sort Tweets</button>
      <TweetList tweets={tweets} handleEditTweet={handleEditTweet}/>
    </div>
  )
}

export default Twitter
