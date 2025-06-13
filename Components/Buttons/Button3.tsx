'use client'
import { motion } from 'motion/react'

export const Button3 = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <motion.div
                whileHover="hovered"
                initial="initial"
                className='bg-black p-px '>
                <motion.div
                    variants={{
                        initial: { x: 0, y: 0 },
                        hovered: { x: 10, y: -10 }
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'

                    }}
                    className='bg-orange-500 px-6 p-2 border-1'>
                    <button className='text-white font-medium font-sans'>
                        <motion.span
                            variants={{
                                initial: { y: 0, x: 0 },
                                hovered: { y: -10, x: 0, opacity:0 }
                            }}
                            transition={{
                                duration: 0.1,
                                ease: 'easeInOut',
                            }}
                            className='inline-block'
                        >Hover me!</motion.span>
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}