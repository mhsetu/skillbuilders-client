import React from 'react';
import { Carousel } from 'flowbite-react';
import image1 from '../../../Assets/1 (2).jpg';
import image2 from '../../../Assets/2 (2).jpg';

const Carousels = () => {
  return (
    <div>
      <div>
        <div className='lg:h-56 h-64  xl:h-80 2xl:h-96'>
          <Carousel pauseOnHover>
            <img src={image1} alt='...' />
            <img src={image2} alt='...' />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
