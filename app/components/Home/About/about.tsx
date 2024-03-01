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
        <div className='application_header'>Group Members</div>
        <div className='application_paragraph'>CISC 326/ CISC/ CMPE322 Group2</div>
      </div>

      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/max.jpg' alt='Past Events'  />
          </Link>
          <p className='section_header'>Max Hao</p>
          <div className='section_paragraph'>Group Leader</div>

        </div>

        <div className='application_center_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/dharsan.jpeg' alt='Members'  />
          </Link>
          <div className='section_header'>Dharsan Ravindran</div>
          <div className='section_paragraph'>Presenter</div>

        </div>

        <div className='application_right_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/nick.jpeg' alt='Application' />
          </Link>
          <div className='section_header'>Nicholas Jano</div>
          <div className='section_paragraph'>Presenter</div>

        </div>
      </div>
      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/ziqing.png' alt='Past Events'  />
          </Link>
          <p className='section_header'>Ziqing Wang</p>
          <div className='section_paragraph'>Member</div>

        </div>

        <div className='application_center_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/zhang.jpg' alt='Members'  />
          </Link>
          <div className='section_header'>Zhang Haonan</div>
          <div className='section_paragraph'>Member</div>

        </div>

        <div className='application_right_lower_container'>
          <Link href='/construction'>
            <Image src='GroupImages/lu.jpg' alt='Application' />
          </Link>
          <div className='section_header'>Lu Zihan</div>
          <div className='section_paragraph'>Member</div>

        </div>
      </div>
    </div>
  )
}

export default About
