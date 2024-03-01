'use client'


import React from 'react';
import './about.css'
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

const About = () => {


  return (
    <div className='application_outer_container'>
      <div className='application_header_container'>
        <div className='application_header'>example</div>
        <div className='application_paragraph'>example</div>
      </div>

      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <Link href='/construction'>
            <Image src='/c.jpg' alt='Past Events'  />
          </Link>
          <p className='section_header'>example</p>
          <div className='section_paragraph'>example</div>

        </div>

        <div className='application_center_lower_container'>
          <Link href='/construction'>
            <Image src='/s.jpg' alt='Members'  />
          </Link>
          <div className='section_header'>example</div>
          <div className='section_paragraph'>example</div>

        </div>

        <div className='application_right_lower_container'>
          <Link href='/construction'>
            <Image src='/d.jpg' alt='Application' />
          </Link>
          <div className='section_header'>example</div>
          <div className='section_paragraph'>example</div>

        </div>
      </div>
    </div>
  )
}

export default About
