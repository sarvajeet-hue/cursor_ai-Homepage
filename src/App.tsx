import Navbar from "./components/common/Navbar";
import cursor_img from "./assets/gradient-hero-prerender.avif";
import curor_temp from "./assets/watch-demo.avif";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      {/* <div className="container">
        <Navbar />
      </div>

      <div className="banner">
        {<img src={cursor_img} className="object-cover rounded-lg w-full" />}

        <div className="bnnertext">
          <h1>The First Code Editor</h1>
          <p>
            Built to make you extraordinarily productive, Cursor is the best way
            to code with AI.
          </p>
          <div className="button">
            <span>Download</span>
            <span>ALL Download</span>
          </div>
          <img src={curor_temp} className="object-cover rounded-lg w-full" />
        </div>
      </div>

      <div className="banner">
        <p> kj kj klj kl jkl j klj kl jkl j kl jkl j klj kl jkl h jhgh gf h</p>
      </div> */}

        <div>
          <Navbar/>  
          <Banner/>
        </div>




    </>
  );
}

export default App;
