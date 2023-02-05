import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px]
            text-gray-500 text-2xl'>About</h3>
            <motion.img 
                initial={{
                    x: -200,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                src='https://media.licdn.com/dms/image/C4E03AQEtq-gOpoCy0w/profile-displayphoto-shrink_400_400/0/1595714041657?e=1681344000&v=beta&t=Rxp4B1-KNmgY00L4XP_ztLQJVnNxjkdDzIYJvLsxTkI'
            />
        </div>
    )
}