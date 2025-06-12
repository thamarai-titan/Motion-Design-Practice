'use client'
import {motion} from 'motion/react'
import { transform } from 'typescript'

export const Button1 = ()=>{
    return <>
        <div className=" [perspective::1000px] [transform-style:preserve-3d] w-full h-screen flex items-center justify-center bg-neutral-800" 
        >
            <motion.button 
            whileHover={{
                rotateX:25,
                rotateY:10,
                boxShadow: "0px 20px 50px rgba(8, 112, 185,1.7)"
            }}
            style={{
                translateZ:100,
            }}
            

            
            className="group relative px-4 p-2 bg-black rounded text-neutral-400 "
            >
            <span className='group-hover:text-cyan-500 transition-colors duration-500'>Press</span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px] w-3/4 mx-auto"></span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
            </motion.button>

        </div>
    </>
}