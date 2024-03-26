import React from 'react';
import './event.css';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const Event = () => {
  return (
    <div className='event_outer_container'>
      <div className='event_inner_container'>
        <div className='event_content'>
          <Image src='FGLogo.png' alt='Event Image' className='event_image' />
          <div className='event_text'>
            <h1>About Flight Gear</h1>
            <p>FlightGear is an open-source flight simulator project, offering a highly realistic flight simulation experience. Developed by a global community of enthusiasts, it provides users with the opportunity to experience the thrill of flying various aircraft types in diverse environments. From commercial airliners to small single-engine planes, FlightGear offers a wide range of aircraft models to choose from. With its advanced physics engine and detailed scenery, users can enjoy a lifelike simulation of flying, complete with accurate weather conditions and dynamic day-night cycles. Whether you&apos;re a seasoned pilot or an aviation enthusiast, FlightGear provides an immersive platform to explore the skies and experience the joy of flight from the comfort of your own computer.</p>

            <button><Link href="https://wiki.flightgear.org/FlightGear_manual" target="_blank">
    FG Documentation
  </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

