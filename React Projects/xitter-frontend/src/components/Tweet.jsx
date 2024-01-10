import '../CSS/Tweet.css'
const Tweet = ({ tweet, likes }) => {
  return (
    <div className="tweet-wrapper">
      <div className="tweet-content">
        {tweet}
      </div>
      <div className='tweet-likes'>
        Likes: {likes}
      </div>
    </div>
  )
}

export default Tweet
