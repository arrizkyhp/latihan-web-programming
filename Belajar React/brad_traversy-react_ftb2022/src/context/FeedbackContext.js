import { createContext, useState } from "react";
import {v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 4,
            rating: 7,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          }
    ])

 

    // Add Item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    // Delete Item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete?')) {
          // Filter
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

       // Edit Item
    // Set Edit Item | If Click Edit icon edit turn to true
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
  })

    // Set Item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            // item: item,
            item,
            edit: true
        })
    }

    // Update Item 
    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map( (item) => item.id === id ? {...item, ...updItem} : item))
    }



    return <FeedbackContext.Provider value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext