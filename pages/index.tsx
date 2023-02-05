import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div> 
      <Head>
        <title>Felipe Cantu Jr</title>
      </Head>
      <h1 className='text-red-500'>Hello Next World</h1>
      <Header />
    </div>
  )
} 

export default Home