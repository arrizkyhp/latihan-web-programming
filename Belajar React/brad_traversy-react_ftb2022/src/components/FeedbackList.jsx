import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
    // Get State from Context 
    const { feedback } = useContext(FeedbackContext)

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
                item={item} 
                // Prop Drilling

            />
        ))}

    </div>
  )
}




export default FeedbackList