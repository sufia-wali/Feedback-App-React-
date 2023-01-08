import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {
  const { addFeedback, feedbackEdit , updateFeedback} = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(()=>{
  if(feedbackEdit.edit === true){
    setBtnDisabled(false);
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating);
  }
  },[feedbackEdit])
  const textHandler = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 characters');
      setBtnDisabled(true);

    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text, rating
      }
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
      addFeedback(newFeedback);
      }
      setBtnDisabled(true);
      setText('');
      setRating(10);
    }
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input type="text" placeholder='Write a review' value={text} onChange={textHandler} />
          <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm