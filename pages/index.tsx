// Home Page


import React from 'react'
import Head from 'next/head';


// COMPONENET PAGE IMPORTING 
import Header from '../app/components/Header/Header'
import Footer from '../app/components/Footer/Footer'

import Student from '../app/components/Home/Student/Student'
import Hero from '../app/components/Home/Hero/Hero'
import Event from '../app/components/Home/Event/Event'
import About from '../app/components/Home/About/about'


const Page = () => {
  return (
    <div>
      <Head>
        <title>GROUP 2 322 GROUP WORK</title>
      </Head>
      <Header/>

      {/* Components in home page*/}
      <Hero/>
      <Student/>
      <About/>
      <Event/>

      <Footer/>
    </div>
  )
}

export default Page