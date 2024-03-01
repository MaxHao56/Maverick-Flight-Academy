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
      </div>
      <div className='about_gallery'>
        <div
          className='image-container'
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <Link href={"https://drive.google.com/file/d/1mn0i4ALAWf5xcI3oDH9kvLuue_zSCiQ1/view?usp=drive_link"}>
            <h1 className='titles_7'>Report</h1>

          <Image src="A.png" alt="Report" className={hovered1 ? 'hidden' : ''} />
          <Image src="report.png" alt="Report" className={hovered1 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <Link href={"https://www.youtube.com/watch?v=af_zM-ovKcY"}>
          <h1 className='titles_7'>Pres. Video</h1>
          <Image src="presentation.png" alt="presentation" className={hovered2 ? 'hidden' : ''} />
          <Image src="presentation.png" alt="Presentation" className={hovered2 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <Link href={"https://drive.google.com/file/d/1Dpcm_F3m1s8Ze7Ds2WPFH52qQi37r6Hs/view?usp=share_link"}>
          <h1 className='titles_7'>Pres. Slides</h1>
          <Image src="1.png" alt="presentation" className={hovered2 ? 'hidden' : ''} />
          <Image src="presentation.png" alt="Presentation" className={hovered2 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

      </div>
      
    </div>
  );
};

export default About;
