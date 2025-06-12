'use client'
import {motion} from 'motion/react'
export const Button2 = ()=>{
    return (
        <div className="w-full h-screen flex items-center justify-around bg-neutral-800">
        <motion.div 
        whileHover={{
            y:-10,
            x:10,
            boxShadow: "0px 20px 20px rgba(255, 68, 68,1.7)"
        }}
        className='group relative p-[2px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded'>
        <button
        className="px-5 p-2 text-neutral-400 rounded bg-black group-hover:text-white transition-colors duration-500">
        Glowing
        </button>
        </motion.div>
        </div>
        )
}