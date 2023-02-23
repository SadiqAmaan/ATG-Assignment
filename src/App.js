import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import PostNav from "./Components/PostNav";
import AllPosts from "./Components/AllPosts";

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
      <PostNav/>
      <section className="col">
        <div className="post-sec">
          <AllPosts/>
        </div>
        <div className="location"></div>
      </section>
    </div>
  );
}

export default App;
