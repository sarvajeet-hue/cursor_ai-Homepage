import Navbar from "./components/common/Navbar";
import cursor_img from './assets/gradient-hero-prerender.avif'
import curor_temp from './assets/watch-demo.avif'

function App() {
  return (
    <>

<div className="container">
<Navbar/> 
</div>

<div className="banner">
{ <img src={cursor_img} className="object-cover rounded-lg w-full" /> }

    <div className="bnnertext">
    <h1>The First Code Editor</h1>
    <p>Built to make you extraordinarily productive, Cursor is the best way to code with AI.</p>
    <div className="button">
        <span>Download</span>
        <span>ALL Download</span>
    </div>
    <img src={curor_temp} className="object-cover rounded-lg w-full" />

    </div>
</div>


<div className="banner">
<p> kj kj klj kl jkl j klj kl jkl j kl jkl j klj kl jkl h jhgh gf h</p>
</div>


      {/* <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

         
          <div className="w-full flex flex-col md:flex-row p-4 sm:p-6 lg:p-8 ">
            <section className=" w-full">
                <div className="md:shrink-0 relative mt-[50px]">
                 
                  <h1 className="text-center text-white font-bold text-lg sm:text-2xl lg:text-4xl absolute inset-0">The First Code Editor</h1>
                </div>
                
            </section>  
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
