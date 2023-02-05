import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div 
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'
            >
                {/* Social Icons */}
                <SocialIcon
                    url='https://www.instagram.com/son_of_robot_/'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/son_of_robot_/'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/son_of_robot_/'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/son_of_robot_/'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/son_of_robot_/'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
            </motion.div>
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center text-gray-300 cursor-ponter'
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Keep In Touch</p>
            </motion.div>
        </header>

    )
}