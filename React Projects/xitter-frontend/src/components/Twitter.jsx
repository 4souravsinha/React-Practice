import { useState , useCallback} from "react"
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

  const handleAddTweet = useCallback((tweet) => {
    setTweets((prevTweets) => {
      const newTweet = {
        content: tweet,
        likes: Math.floor(Math.random() * 100),
        id: prevTweets.length > 0 ? prevTweets[prevTweets.length - 1].id + 1 : 0,
        createdAt: new Date()
      }
      return [...prevTweets, newTweet];
    });
  }, []);

  const handleEditTweet = useCallback((newtweet, tweetId) => {
    setTweets((prevTweets) => {
      return prevTweets.map((tweet) => 
        tweet.id === tweetId ? { ...tweet, content: newtweet } : tweet
      );
    });
  }, []);

  const handleSortTweets = useCallback(() => {
    setTweets((prevTweets) => {
      return [...prevTweets].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    });
  }, []);

  return (
    <div>
      <AddTweet handleAddTweet={handleAddTweet} />
      <button onClick={handleSortTweets}>Sort Tweets</button>
      <TweetList tweets={tweets} handleEditTweet={handleEditTweet}/>
    </div>
  )
}

export default Twitter
