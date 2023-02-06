import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
        <motion.div 
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
                md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a {' '} <span className='underline decoration-[#f7ab0a/50]'>little</span>{' '} background</h4>
            </div>
            <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum. Molestie nunc non blandit massa enim. 
            Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tellus orci ac auctor augue mauris augue neque. Lobortis elementum nibh tellus molestie nunc non blandit. 
            Ut diam quam nulla porttitor massa id neque aliquam. Mattis pellentesque id nibh tortor id aliquet lectus proin. Pulvinar pellentesque habitant morbi tristique senectus et netus. Vel facilisis volutpat 
            est velit egestas dui id ornare. Id faucibus nisl tincidunt eget. Non tellus orci ac auctor augue. Non tellus orci ac auctor augue. Pretium aenean pharetra magna ac placerat vestibulum lectus. Donec pretium
             vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui ut ornare lectus sit amet est placerat. Cursus vitae congue mauris rhoncus. 
             In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Mauris vitae ultricies leo integer.
            </p>
        </motion.div>
    )
}
