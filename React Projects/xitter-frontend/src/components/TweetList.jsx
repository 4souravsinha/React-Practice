import Tweet from './tweet'
import '../CSS/TweetList.css'
const TweetList = ({ tweets , handleEditTweet }) => {
  return (
    <ul className='tweet-list'>
      {tweets.map((tweet) => {
        return (
          <li key={tweet.id} className='whole-tweet'>
            <Tweet tweet={tweet.content} likes={tweet.likes} createdAt={tweet.createdAt.toString()} tweetId={tweet.id} handleEditTweet={handleEditTweet} />
          </li>
        )
      })}
    </ul>
  )
}

export default TweetList
