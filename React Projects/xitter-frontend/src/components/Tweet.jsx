import { useState } from 'react';
import '../CSS/Tweet.css'
const Tweet = ({ tweet, likes, createdAt, handleEditTweet , tweetId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(tweet)
  return (
    <div className="tweet-wrapper">
      <div className='tweet-content-n-edit'>
        <div className="tweet-content">
          {
            isEditing ?
              <input
                value={text}
                onChange={(e) => { setText(e.target.value) }} />
              :
              tweet
          }
        </div>
        <button 
          className='edit-button'
          onClick={()=>{
            setIsEditing(!isEditing)
            handleEditTweet(text , tweetId)
          }}
        >
          {isEditing ? "Save Tweet" : "Edit Tweet"}
        </button>
      </div>
      <div className='like-time-wrapper'>
        <div className='tweet-likes'>
          {likes} likes
        </div>
        <div className='tweet-time'>
          created at {createdAt}
        </div>
      </div>

    </div>
  )
}

export default Tweet
