import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    // return (
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //         {feedback.map((item) => (
    //             <motion.div  key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    //             <FeedbackItem 
    //                 id={item.id} 
    //                 rating={item.rating} 
    //                 text={item.text} 
    //                 // Prop Drilling
    //                 handleDelete={handleDelete}
    //             />
    //             </motion.div>
    //         ))}
    //         </AnimatePresence>
    
    //     </div>
    //   )

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem 
                key={item.id} 
                id={item.id} 
                rating={item.rating} 
                text={item.text} 
                // Prop Drilling
                handleDelete={handleDelete}

            />
        ))}

    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}


export default FeedbackList