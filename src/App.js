import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import PostNav from "./Components/PostNav";
import AllPosts from "./Components/AllPosts";
import Article from "./Components/Article";
import Education from "./Components/Education";
import Event from "./Components/Event";
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import "./styles/app.css";
import "./styles/popup.css";
import "./styles/navbar.css";
import "./styles/banner.css";
import "./styles/postnav.css";
import "./styles/allpost.css";
import "./styles/article.css";
import "./styles/education.css";
import "./styles/event.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <section className="col">
        <div className="post-sec">
        <Router>
      <PostNav/>
        <Routes>
          <Route path="/allPosts" element={<AllPosts/>} />
          <Route path="/article" element={<Article/>} />
          <Route path="/education" element={<Education/>}/>
          <Route path="/event" element={<Event/>}/>
        </Routes>
      </Router>
        </div>
        <div className="location"></div>
      </section>
    </div>
  );
}

export default App;
