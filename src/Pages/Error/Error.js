import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='mt-10'>
      <h1 className='lg:text-[100px] md:text-[100px] text-[50px] text-center mb-0  text-wrap '>
        404 <br /> Not Found
      </h1>
      <div className='flex justify-center'>
        <img
          className='mt-0'
          src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
          alt=''
        />
      </div>
      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>Look like you're lost</h3>

        <p>the page you are looking for not available!</p>

        <Link to='/' className='btn btn-primary mt-4 mb-10'>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
