

import React from 'react'
import Head from 'next/head';


// COMPONENET PAGE IMPORTING 
import Header from '../app/components/Header/Header'
import Footer from '../app/components/Footer/Footer'



const Page = () => {

  return (
    <div>
      <Head>
        <title>322 MEMBER INTRO</title>
      </Head>
      <Header/>
      <h3>Here is member page</h3>
      <Footer/>
    </div>
     
  )
}

export default Page