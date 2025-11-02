'use client'
import { motion } from 'framer-motion'

// This transition will be used by default
const transition = { duration: 0.8, ease: "easeInOut" }

const About = () => {
  return (
    // Note: To test this, you'll need to add other content to your page
    // to make it scrollable, or temporarily make this container taller,
    // e.g., min-h-[200vh]
    <main className='min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 bg-zinc-950'>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} // Changed from animate
        viewport={{ once: true }}           // Added
        transition={transition}
        className='text-xl text-zinc-500 mb-2'
      >
        About
      </motion.h2>
      
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} // Changed from animate
        viewport={{ once: true }}           // Added
        transition={{ ...transition, delay: 0.2 }}
        className='text-3xl md:text-4xl font-extrabold text-white mb-12 md:mb-16'
      >
        Lesh Studio
      </motion.h4>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} // Changed from animate
        viewport={{ once: true }}           // Added
        transition={{ ...transition, duration: 1, delay: 0.4 }}
      >
        <p className='max-w-3xl text-3xl sm:text-4xl lg:text-5xl text-white text-center leading-tight lg:leading-snug'>
          Think of us as your <span className='text-blue-500'>marketing department</span> that happens to work from a different office.
          <br/><br/>
          We take care of everything from <span className='text-purple-500'>strategy</span> to <span className='text-pink-500'>execution</span>, so you can focus on what you do best - running your business.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} // Changed from animate
        viewport={{ once: true }}           // Added
        transition={{ ...transition, duration: 1, delay: 0.8 }}
        className='mt-12 md:mt-16'
      >
        <p className='text-sm md:text-base text-zinc-400 text-center'>
          <span className='text-emerald-500'>Digital Marketing</span> agency
          <br />
          that helps you <span className='text-amber-500'>promote</span>
          <br />
          your products and services online.
        </p>
      </motion.div>
    </main>
  )
}

export default About