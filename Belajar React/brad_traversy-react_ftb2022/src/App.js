
import Header from "./components/Header";

import About from "./pages/About";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutIconLink from "./components/AboutIconLink";


function App() {
 
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
       </div>
       <Link to="/about"> <AboutIconLink /></Link>
    </Router>
  );
}

export default App;
