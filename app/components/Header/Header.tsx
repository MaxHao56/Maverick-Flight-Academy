// Header.tsx
'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import '../Header/header.css'
import { scrollToBottom, scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { Image } from 'react-bootstrap';



export default function Header() {

  const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    });
  };

  const scrollStudent = () =>{
    const targetPostion = 415;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollAbout = () =>{
    const targetPostion3 = 1100
    window.scroll({
      top:targetPostion3,
      behavior:'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }


  const scrollsponsor= () =>{
    const targetPostion3 = 1800
    window.scroll({
      top:targetPostion3,
      behavior:'smooth'
    })
  }
  return (

    <header className="Header_CISD">
      
      <div className='CISD_LOGO'>
        <Link href='/'>
          <Image src="HeaderImages/f15.png" alt="CISD" className='CISD_LOGO_img' />
        </Link>
        <Link href='/'>
          <Image src="HeaderImages/logo.png" alt="CISD" className='CISD_LOGO_word' />
        </Link>
        {/* 
        <Link href='/'>
          <Image src="/" alt="CISD" className='CISD_name' />
        </Link> */}
      </div>  
      
      
        
      <nav className="Navigation_item">
        
        <ul>
          <li><Link  href='/' >Assignments</Link></li>
          <li><Link href='/' >Members</Link></li>
          <li><Link href='/' >About</Link></li>

        </ul>
      </nav>
    
    </header>



  )
}

