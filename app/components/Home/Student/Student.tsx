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
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  return (
    <div className='about_outer_container'>
      <div className='about_header'>Project A1: Conceptual Architecture</div>
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

      <div className='about_header'>Project A2: Concrete Architecture</div>
      <div className='about_paragraph'>
      </div>
      <div className='about_gallery'>
        <div
          className='image-container'
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <Link href={"https://drive.google.com/file/d/1IUhYVZxs6lOTfomaMGkR8uV1p_JgLjlj/view?usp=share_link"}>
            <h1 className='titles_7'>Report</h1>

          <Image src="A.png" alt="Report" className={hovered3 ? 'hidden' : ''} />
          <Image src="report.png" alt="Report" className={hovered3 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
        >
          <Link href={"https://www.youtube.com/watch?v=M5GfdniMjFI"}>
          <h1 className='titles_7'>Pres. Video</h1>
          <Image src="pres2.png" alt="presentation" className={hovered2 ? 'hidden' : ''} />
          <Image src="pres2.png" alt="Presentation" className={hovered2 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <Link href={"https://drive.google.com/file/d/1Z52D6GmuL5HGwR6aJ4bPOoB7hgXmv0mM/view?usp=share_link"}>
          <h1 className='titles_7'>Pres. Slides</h1>
          <Image src="2.png" alt="presentation" className={hovered4 ? 'hidden' : ''} />
          <Image src="pres2.png" alt="Presentation" className={hovered4 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

      </div>

      <div className='about_header'>Project A3: Architectural Enhancement</div>
      <div className='about_paragraph'>
      </div>
      <div className='about_gallery'>
        <div
          className='image-container'
          onMouseEnter={() => setHovered5(true)}
          onMouseLeave={() => setHovered5(false)}
        >
          <Link href={"https://drive.google.com/file/d/1KoyEmL-IwoxGoNJjxOMrR9PyJ6Bmkv-Y/view?usp=share_link"}>
            <h1 className='titles_7'>Report</h1>

          <Image src="A.png" alt="Report" className={hovered5 ? 'hidden' : ''} />
          <Image src="report2.png" alt="Report" className={hovered5 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
        >
          <Link href={"https://www.youtube.com/watch?v=9D8tGTAbEYA"}>
          <h1 className='titles_7'>Pres. Video</h1>
          <Image src="pres3.png" alt="presentation" className={hovered2 ? 'hidden' : ''} />
          <Image src="pres3.png" alt="Presentation" className={hovered2 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
          <Link href={"https://drive.google.com/file/d/1wmqn4WDFAmPWKeXSXAX4nZHEIxNergkH/view?usp=share_link"}>
          <h1 className='titles_7'>Pres. Slides</h1>
          <Image src="3.png" alt="presentation" className={hovered6 ? 'hidden' : ''} />
          <Image src="pres3.png" alt="Presentation" className={hovered6 ? '' : 'hidden'} />
          </Link>
          <div className='about_text'></div>
        </div>

      </div>



    </div>
  );
};

export default About;
