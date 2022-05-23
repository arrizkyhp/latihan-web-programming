import { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import {v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";

const Home = () => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      // console.log(newFeedback)
      setFeedback([newFeedback, ...feedback])
    }
  
    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure want to delete?')) {
        // Filter
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }
  return (
    <>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </>
  )
}

export default Home