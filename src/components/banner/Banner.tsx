import banner from "../../assets/gradient-hero-prerender.avif";
import { Button } from "../ui/button";
import cursor_image from "../../assets/watch-demo.avif";

const Banner = () => {
  return (
    <div className="max-w-8xl mx-auto  min-h-[40rem] md:max-h-[min(80rem,300vw)] md:min-h-[48rem] px-4  pt-[calc(var(--navbar-height)+32px)]  relative overflow-hidden  pb-16 mt-[120px] rounded-2xl  ">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage : `url(${banner})`}}>
        {/* <img src={banner} alt="" className="w-full rounded-2xl object-cover" /> */}
      </div>


      <div className="relative flex flex-col items-center  text-center mt-[30px]  px-4 ">
        <h1 style={{fontFamily:"Geist"}} className="text-white font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif  ">
          The AI Code Editor
        </h1>

        <p style={{fontFamily:'"Geist Mono' }} className="text-white text-xl sm:text-3xl md:text-4xl mt-6 max-w-7xl ">
          Built to make you extraordinarily productive, Cursor is the best way
          to code with AI.
        </p>

        <div className="md:flex hidden  flex-col md:flex-row items-center justify-center gap-4 mt-10 font-mono font-bold">
          <Button variant="secondary" className="text-lg flex items-center gap-2">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M13.9984.98236c-2.53.35112-5.06001.71507-7.58521 1.10147a3272.65486 3272.65486 0 0 0 0 5.60513C8.9432 7.68094 11.4716 7.64246 14 7.63284c-.0016-2.21736 0-4.43312-.0016-6.65048ZM5.72073 2.19285C3.8112 2.43174 1.90151 2.68506 0 2.97847v4.75217c1.90792.00481 3.81601-.02405 5.72394-.02244-.00161-1.83899-.00161-3.67637-.00321-5.51535ZM5.71896 8.33028C3.81264 8.33348 1.90648 8.30302 0 8.30943v4.76497c1.90792.2582 3.81601.5049 5.72073.7873.00304-1.8438-.00177-3.6876-.00177-5.53142ZM13.9984 8.38319H6.40197c.00321 1.85501.00802 3.70841.01122 5.56201 2.53001.3429 5.06001.6941 7.58521 1.0724 0-2.2125.0032-4.4235 0-6.63441Z"
                fill="currentColor"
              />
            </svg>
            Download for Windows
          </Button>
          <Button className="text-lg">All Downloads</Button>
        </div>
      </div>

      <div className="absolute mt-[60px] left-1/2 -translate-x-1/2 max-w-7xl w-full px-6 ">
        <img src={cursor_image} alt="" className="w-full object-cover" />
      </div>

      <div className="md:hidden flex absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full  flex-col  items-center justify-center gap-4 mt-10 font-mono font-bold p-4">
          <Button variant="secondary" className="text-lg flex items-center gap-2 w-full">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"  
              aria-hidden="true"
            >
              <path
                d="M13.9984.98236c-2.53.35112-5.06001.71507-7.58521 1.10147a3272.65486 3272.65486 0 0 0 0 5.60513C8.9432 7.68094 11.4716 7.64246 14 7.63284c-.0016-2.21736 0-4.43312-.0016-6.65048ZM5.72073 2.19285C3.8112 2.43174 1.90151 2.68506 0 2.97847v4.75217c1.90792.00481 3.81601-.02405 5.72394-.02244-.00161-1.83899-.00161-3.67637-.00321-5.51535ZM5.71896 8.33028C3.81264 8.33348 1.90648 8.30302 0 8.30943v4.76497c1.90792.2582 3.81601.5049 5.72073.7873.00304-1.8438-.00177-3.6876-.00177-5.53142ZM13.9984 8.38319H6.40197c.00321 1.85501.00802 3.70841.01122 5.56201 2.53001.3429 5.06001.6941 7.58521 1.0724 0-2.2125.0032-4.4235 0-6.63441Z"
                fill="currentColor"
              />
            </svg>
            Download for Windows
          </Button>
          <Button className="text-lg w-full">All Downloads</Button>
        </div>
    </div>

       

  );
};

export default Banner;
