"use client"
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2
      }
    }
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: 100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  return (
    
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden relative">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Animated shimmer effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
        animate={{
          x: ["-100%", "200%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 8,
            ease: "linear"
          }
        }}
      />
      
      <Navbar/>
      
      <motion.div 
        className="flex flex-col justify-center items-center h-full text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-8 items-center mb-8">
         

          <motion.h1 
            className="text-8xl md:text-[10rem] font-sans mb-2 font-light tracking-tight uppercase"
            variants={titleVariants}
          >
            Lesh Media
          </motion.h1>

         
        </div>

        <motion.div
          className="relative"
          variants={subtitleVariants}
        >
          <p className="text-xl md:text-2xl font-light tracking-widest text-gray-300 uppercase letter-spacing: 0.2em;">
            Growth Made Effort-Lesh
          </p>
          
          {/* Decorative line */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#6D6ADD] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Luxury decorative elements */}
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#6D6ADD] to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#6D6ADD] rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#8B7CF8] rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default Hero;