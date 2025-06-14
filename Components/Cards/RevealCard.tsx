'use client'
import { motion } from 'motion/react'
import { geist } from '@/public/fonts/font'
import { cn } from "@sglara/cn";


export const RevealCard = () => {
    return (
        <div className={cn(geist.className, 'w-full h-screen flex items-center justify-center ')}>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={{
                    initial: {},
                    hovered: {}
                }}
                className=' w-70 h-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative'>
                <div className='h-1/2 w-full bg-black text-white flex items-center justify-center font-medium text-xl'>
                    Take a Look
                </div>
                <div className='flex justify-end second'>
                    <motion.img
                        src="/images/building.jpg"
                        alt="Building"
                        initial={{ width: '100%', height: '100%', bottom: 0, left: 0 }}
                        variants={{
                            hovered: {
                                width: '50%',
                                height: '50%',
                                bottom: 0,
                                left: 0,
                                transition: { duration: 0.4, ease: 'easeInOut' }
                            }
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"

                        }}
                        className='w-70 h-80 bg-blue-400 absolute object-cover z-0'></motion.img>
                    <div className='second-2 w-35 h-40 flex items-center justify-center'>More</div>
                </div>

            </motion.div>

        </div>
    )
}