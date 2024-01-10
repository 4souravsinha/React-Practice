import Tweet from './tweet'
import '../CSS/TweetList.css'
import { memo } from 'react'
const MemoizedTweet = memo(Tweet)
const TweetList = ({ tweets, handleEditTweet }) => {
  return (
    <ul className='tweet-list'>
      {tweets.map((tweet) => {
        return (
          <li key={tweet.id} className='whole-tweet'>
            <MemoizedTweet
              tweet={tweet.content}
              likes={tweet.likes}
              createdAt={tweet.createdAt.toString()}
              tweetId={tweet.id}
              handleEditTweet={handleEditTweet}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TweetList
