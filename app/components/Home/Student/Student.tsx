'use client'

import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

import './student.css';




const About = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  return (
    <div className='about_outer_container'>
      <div className='about_header'>Project A1</div>
      <div className='about_paragraph'>
      Report - Presentation 
      </div>
      <div className='about_gallery'>
        <div
          className='image-container'
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <Link href={"https://drive.google.com/file/d/1mn0i4ALAWf5xcI3oDH9kvLuue_zSCiQ1/view?usp=drive_link"}>
          <Image src="/A.png" alt="Image 1" className={hovered1 ? 'hidden' : ''} />
          <Image src="/report.png" alt="Hover Image 1" className={hovered1 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <Link href={"https://www.youtube.com/watch?v=af_zM-ovKcY"}>
          <Image src="/1.png" alt="Image 2" className={hovered2 ? 'hidden' : ''} />
          <Image src="/presentation.png" alt="Hover Image 2" className={hovered2 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        {/* <div
          className='image-container'
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <Image src="/school.jpg" alt="Image 3" className={hovered3 ? 'hidden' : ''} />
          <Image src="/s.jpg" alt="Hover Image 3" className={hovered3 ? '' : 'hidden'} />
          <div className='about_text'></div>
        </div> */}
{/* 
        <div
          className='image-container'
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <Image src="/contact.jpg" alt="Image 4" className={hovered4 ? 'hidden' : ''} />
          <Image src="/d.jpg" alt="Hover Image 4" className={hovered4 ? '' : 'hidden'} />
          <div className='about_text'></div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
