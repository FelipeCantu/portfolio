import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Felipe Cantu Jr</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/330290228_726510738839226_7331395893523674630_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rUz8Ic7iaesAX8PBXIz&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD_d2dvxLKjraYeK7OZ-Ewq4KeI3G6oRBZh1iOSruYX2Q&oe=63ED627E'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

