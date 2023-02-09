import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
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
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{
                    once: true
                }}
                src='https://media.licdn.com/dms/image/C4E03AQEtq-gOpoCy0w/profile-displayphoto-shrink_400_400/0/1595714041657?e=1681344000&v=beta&t=Rxp4B1-KNmgY00L4XP_ztLQJVnNxjkdDzIYJvLsxTkI'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
                md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {" "}
                    <span className='underline decoration-[#f7ab0a]/50'>little
                    </span>{" "} background
                </h4>
            </div>
            <p className='text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
					odio perferendis repellat accusamus, aspernatur voluptas qui natus rem
					maxime quos eveniet suscipit? Quidem neque a voluptas vitae quo modi
					mollitia expedita nesciunt, magni ad, laudantium in voluptate facere
					itaque explicabo quia quae libero officiis ab soluta tempora autem?
					Hic rerum quas ea nobis dolore quam corrupti eveniet, dolorem quia
					veniam blanditiis et repellat molestias quisquam quod ipsam incidunt
					quibusdam fugiat provident. Officia nemo dignissimos, architecto alias
					quisquam quis inventore itaque natus vitae ducimus, saepe et fugit
					impedit explicabo, aliquam similique magnam obcaecati repellat
					exercitationem animi libero quibusdam reprehenderit. Dolorum,
					possimus.
            </p>
        </motion.div>
    )
}
