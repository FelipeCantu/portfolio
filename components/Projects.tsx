import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-madatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0, }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span>
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                UPS of Clone
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis maiores velit fuga ad iste.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem laboriosam maiores consequuntur tempore veritatis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officia suscipit! Consequuntur facilis dignissimos officiis voluptatem quia,
                                deserunt ipsum exercitationem?
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]' />
        </motion.div>

    )
}

export default Projects