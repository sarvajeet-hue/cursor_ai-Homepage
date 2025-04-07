 import banner from '../../assets/gradient-hero-prerender.avif'
 const Banner = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 mt-[120px] relative  ">
        <div className=''>
            <img src={banner} alt="" className='w-full rounded-2xl object-cover ' />
        </div>

        <div className='absolute top-[20%] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 px-4'>
            <h1 className='text-white font-bold text-6xl md:text-8xl w-full text-center'>The AI Code Editor</h1>
            <p className='max-w-xl mx-auto text-white'>Built to make you extraordinarily productive, Cursor is the best way to code with AI.</p>
        </div>
    </div>
  )
}

export default Banner
