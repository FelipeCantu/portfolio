import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20'>
            <div className='flex flex-row items-center'>
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
            </div>
            <div className='flex flex-row items-center text-gray-300 cursor-ponter'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='Gray'
                    bgColor='Transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Keep In Touch</p>
            </div>
        </header>

    )
}