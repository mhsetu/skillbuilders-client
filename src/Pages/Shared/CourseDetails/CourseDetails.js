import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AllPaidCourse from '../../AllPaidCourse/AllPaidCourse';
import { AuthProvider } from '../../../Contexts/ContextProvider';
import Error from '../../Error/Error';

export const AllCourseProvider = createContext();
const CourseDetails = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const [data, setData] = useState([]);
  const { cart, setCart, user } = useContext(AuthProvider);
  const [dataLength, setDataLength] = useState(6);

  const {
    id,
    title,
    broad_description,
    course_reviews,
    enrolled_students,
    description,
    instructor,
    instructor_description,
    last_updated,
    position,
    ratings,
    requirement,
    skills_gain,
    courses,
    course_includes,
    instructor_img,
  } = singleData;

  useEffect(() => {
    fetch('https://skillbuilders-server.vercel.app/course')
      .then((res) => res.json())
      .then((ndata) => setData(ndata.courses));
  }, []);
  // console.log(data);

  const courseFilter = data.filter((d) => d.id !== id);

  const parsedCartData = JSON.parse(localStorage.getItem('cart'));
  console.log(parsedCartData);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log(product);
    const existingProduct = cart?.find((pro) => pro?.id === product?.id);
    // setCart(singleData);

    if (!existingProduct) {
      setCart(product);
      localStorage.setItem('cart', JSON.stringify(product));
    }

    if (existingProduct) {
      alert('Product already added to cart');
      return;
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  return (
    <div>
      {singleData ? (
        <div>
          <div className=' text-left bg-[#343a40] py-10 lg:px-10 px-4 text-[#f8f9fa] leading-7 shadow-xl'>
            <h1 className='text-4xl font-semibold lg:text-nowrap text-wrap mb-4'>
              {title}
            </h1>
            <p className='text-xl lg:text-nowrap text-wrap mb-2'>
              {description}
            </p>
            <div className='flex'>
              <p className='mr-2'>{ratings}</p>
              <p>({enrolled_students}) students</p>
            </div>
            <div className='flex text-white justify-between'>
              <div>
                <p className='lg:text-nowrap text-wrap'>
                  Created by: {instructor}
                </p>
                <div className='flex items-center my-2'></div>
                <p>Last Update: {last_updated}</p>
              </div>
              <div>
                {user ? (
                  <div>
                    <div className='my-2'>
                      <Link to='/ShoppingCart'>
                        <button className='btn bg-[#f4a261]'>Go to cart</button>
                      </Link>
                    </div>

                    <div>
                      <button
                        onClick={() => addToCart(singleData)}
                        className='btn bg-[#f4a261] px-5'
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='my-2'>
                      <Link to='/login'>
                        <button className='btn bg-[#f4a261]'>
                          Get Premium Access
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* End */}

          {/* start */}

          <div className='lg:flex md:flex grid items-center  justify-around'>
            <div className='rounded-xl max-w-78 lg:w-96 bg-base-100 shadow-md text-left lg:my-10 my-4 lg:ml-5 mx-2'>
              <div className='lg:px-8 md:px-8 px-10 py-10'>
                <h2 className='card-title'>What you'll learn</h2>
                {skills_gain?.map((skill, index) => (
                  <li className='stat-title' key={index}>
                    {skill}
                  </li>
                ))}
              </div>
            </div>

            <div className=' rounded-xl max-w-78 lg:w-96 bg-base-100 shadow-md text-left lg:my-10 my-4 lg:ml-5 mx-2'>
              <div className='lg:px-8 md:px-8 px-10 py-10'>
                <h2 className='card-title'>Course Includes</h2>
                {course_includes?.map((course, index) => (
                  <li key={index} className='stat-title'>
                    {course}
                  </li>
                ))}
                <div className='card-actions justify-end'></div>
              </div>
            </div>
          </div>

          {/* End */}

          <div className='text-left lg:mx-10 mx-4 my-4 leading-7'>
            <h1 className='text-2xl font-semibold'>Requirements:</h1>
            <li>{requirement}</li>
          </div>
          {/* <button onClick={downloadPdf}>Download</button> */}
          <div className='text-left lg:mx-10 mx-4 my-4 leading-7 '>
            <h1 className='text-2xl font-semibold'>Description</h1>
            <p className=' text-wrap'>{broad_description}</p>
          </div>
          <div>
            <h1 className='lg:text-left lg:mx-10 text-center text-3xl font-semibold my-10'>
              Students also bought
            </h1>
            <div className='grid grid-rows-4 lg:justify-start justify-center'>
              {courseFilter.slice(0, dataLength).map((allCourse) => (
                <AllCourseProvider.Provider
                  key={allCourse.id}
                  value={allCourse}
                >
                  <AllPaidCourse></AllPaidCourse>
                </AllCourseProvider.Provider>
              ))}
              {dataLength > 6 ? (
                <div className='grid justify-center'>
                  <button className='btn btn-primary' onClick={() => setDataLength(6)}>Show Less</button>
                </div>
              ) : (
                <div className='flex justify-center'>
                  <button
                    className='btn btn-primary'
                    onClick={() => setDataLength(courseFilter.length)}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='lg:mt-10 mt-2  text-left lg:flex justify-around'>
            <div className='lg:mb-12 mb-2 lg:ml-10 mx-4'>
              <div className='mb-2'>
                <h1 className='text-2xl font-semibold'>Instructor</h1>
                <p className='  text-[#7b2cbf]'>{instructor}</p>
                <p className='text-sm'>{position}</p>
              </div>
              <div className='flex items-center mb-2'>
                <div className='avatar mr-2'>
                  <div className='w-24 rounded-full'>
                    <img src={instructor_img} alt='instructor_img'/>
                  </div>
                </div>
                <div>
                  <div className='flex'>
                    <StarIcon className='mr-2'></StarIcon>
                    <p>{ratings} Instructor Rating</p>
                  </div>
                  <div className='flex'>
                    <PeopleIcon className='mr-2'></PeopleIcon>
                    <p>{enrolled_students} Students</p>
                  </div>
                  <div className='flex'>
                    <PlayCircleFilledIcon className='mr-2'></PlayCircleFilledIcon>
                    <p>{courses} Courses</p>
                  </div>
                </div>
              </div>
              <p className='lg:w-[500px] text-wrap mx-2'>
                {instructor_description}
              </p>
            </div>

            <div className='lg:mr-8 mr-2  lg:mb-12 pb-8'>
              <h1 className='text-2xl mb-4 mx-4 lg:mx-10 md:mx-10'>Review</h1>
              <div className=' lg:w-96 md:w-96 max-w-78 rounded-xl bg-base-100 shadow-md md:ml-5 lg:ml-10 mx-2'>
                <div className='lg:px-8 md:px-8 px-5 py-10'>
                  <div className='flex card-title text-left'>
                    <PersonIcon className='mr-2 mb-1'></PersonIcon>
                    <p>Guest</p>
                  </div>
                  <p>{course_reviews}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error></Error>
      )}
    </div>
  );
};

export default CourseDetails;
