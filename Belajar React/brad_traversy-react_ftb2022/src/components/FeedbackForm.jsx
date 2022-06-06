import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'

const FeedbackForm = () => {
    const [rating, setRating] = useState(10);
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const  { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        // Jika input kosong
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
            // Jika Input kurang dari 10 karakter
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // jika text input lebih dari 10 karakter
        if(text.trim().length > 10) {
            const newFeedback = {
                // text: text
                text,
                // rating: rating
                rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText("")
            setRating(10)
            setBtnDisabled(true)
        }
    }
  return (
    <Card> 
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating) }/>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder='Write a review' 
                    onChange={handleTextChange}
                    value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm