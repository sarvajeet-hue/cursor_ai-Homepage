import Navbar from "./components/common/Navbar";
import Banner from "./components/banner/Banner";
import { Trusted } from "./components/homepage/Trusted";

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

        <div className="px-8">
          <Navbar/>  
          <Banner/>
          <Trusted/>
        </div>




    </>
  );
}

export default App;
