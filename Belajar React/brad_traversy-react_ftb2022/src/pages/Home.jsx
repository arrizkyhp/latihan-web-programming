import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";

const Home = () => {
  return (
    <>
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
    </>
  )
}

export default Home