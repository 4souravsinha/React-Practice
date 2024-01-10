import Tweet from './tweet'
import '../CSS/TweetList.css'
const TweetList = ({ tweets }) => {
  return (
    <ul className='tweet-list'>
      {tweets.map((tweet) => {
        return (
          <li key={tweet.id} className='whole-tweet'>
            <Tweet tweet={tweet.content} likes={tweet.likes}  />
          </li>
        )
      })}
    </ul>
  )
}

export default TweetList
