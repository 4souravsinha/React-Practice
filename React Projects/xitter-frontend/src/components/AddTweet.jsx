import { useState } from 'react'


const AddTweet = ({ handleAddTweet }) => {
  const [newTweetText, setNewTweetText] = useState('');
  return (
    <div className='add-tweet-container'>
      <input
        placeholder="add new tweet"
        value={newTweetText}
        onChange={(event) => {
          setNewTweetText(event.target.value)
        }}
      />
      <button 
        onClick={()=>{
          if(!newTweetText) return;
          setNewTweetText('')
          handleAddTweet(newTweetText)
        }}
      >
        Add Tweet
      </button>
    </div>
  )
}

export default AddTweet
