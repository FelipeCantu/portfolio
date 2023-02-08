import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
                object-cover object-center'
                src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/66636719_147945803019461_5926806847003557888_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=QKj70XHpT1wAX8YVKjv&tn=2uAZhcrKjky0X2jk&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDWULUd4vOfXHDPEdR-AqdVxMuU94_oXDsiStuwwUzvPg&oe=640A372C'
                alt=''
            >
            </motion.img>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of Anakupto</h4>
                <p className='font-bold text-2xl mt-1'>Anakupto</p>
                <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
                        alt=''
                    />
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
                        alt=''
                    />
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
                        alt=''
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started Work... - Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</li>
                </ul>
            </div>
        </article>
    )
}