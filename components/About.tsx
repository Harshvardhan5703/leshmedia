import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full flex  flex-col items-center'>

      <h2 className='text-xl'  >About</h2>
      <h4 className='text-3xl font-extrabold' >Lesh Studio</h4>

      <div className='relative'>

       
        {/* <div className="absolute top-9 -left-10 w-20 h-8 bg-yellow-300 -rotate-12 -translate-y-2 text-center text-gray-800 rounded-sm ">LESH</div> */}

        <p className='max-w-3xl text-5xl  text-center mt-10' >
            Think of us as your marketing department that happens to work from a different office. <br/> <br/> We take care of everything from strategy to execution, so you can focus on what you do best - running your business.
        </p>
      </div>
      <div className='flex flex-col mt-10  ' >
        <p className='mx-auto' >Digital Marketing agency</p>
        <p className='mx-auto' >that helps you promote</p>
        <p className='mx-auto' >your products and services online.</p>
      </div>
    </div>
  )
}

export default About