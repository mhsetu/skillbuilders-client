import React, { createContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../Shared/Course/Course';
import RandomCourse from '../../Shared/Random Course/RandomCourse';
import Carousels from '../../Shared/Carousel/Carousels';

export const CourseProvider = createContext();
const Home = () => {
  const course = useLoaderData();
  const { courses } = course;
  console.log(courses);
  // const courseFilter=courses.map(co=>co.filter(co.id==))

  return (
    <div>
      <div>
        <Carousels></Carousels>
      </div>
      <div className='mt-5 lg:hidden md:hidden  flex justify-center'>
        <button className='btn btn-outline btn-primary mr-5'>
          <Link to='/login'>Login</Link>
        </button>

        <button className='btn btn-outline btn-error'>
          <Link to='/register'>SignUp</Link>
        </button>
      </div>
      <div className='flex justify-center pb-10'>
        <div className=' sticky h-[400px]  top-[158px] hidden lg:ml-5 md:mx-2 md:inline-block lg:inline-block md:mt-[55px] mt-[70px] md:mb-5'>
          {/* <h1 className='stat-title'>01</h1> */}
          <RandomCourse></RandomCourse>
        </div>
        <div className='lg:col-span-3 md:col-span-3 col-span-4 lg:mx-2 '>
          <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:gap-2 gap-4 mt-[48px]'>
            {courses?.map((corse) => (
              <CourseProvider.Provider key={corse.id} value={corse}>
                <div>
                  <Course></Course>
                </div>
              </CourseProvider.Provider>
            ))}
            {/* {courses.map((corse) => (
          <CourseProvider.Provider key={corse.id} value={corse}>
            <div>
              <Course></Course>
            </div>
          </CourseProvider.Provider>
        ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
