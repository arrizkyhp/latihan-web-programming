import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({rating, text, id, handleDelete}) => {
    
  return (
    <Card>
        <div className="num-display">{rating}</div>
        <button className="close" onClick={() => handleDelete(id)}>
            <FaTimes color="purple" />
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default FeedbackItem