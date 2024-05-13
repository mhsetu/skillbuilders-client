import React, { useContext } from 'react';
import { AllCourseProvider } from '../Shared/CourseDetails/CourseDetails';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const AllPaidCourse = () => {
  const course = useContext(AllCourseProvider);
  const {
    id,
    title,
    last_updated,
    image_url,
    price,
    ratings,
    enrolled_students,
  } = course;
  // console.log(course);
  return (
    <div>
      {/* start */}
      <button>
        <Link to={`/course/${id}`}>
          <div className=' w-[300px] md:w-[400px] lg:w-[550px] bg-base-100 shadow-md flex mb-4 rounded-md lg:mx-10 mx-2 text-left items-center'>
            <div className='avatar m-2'>
              <div className='lg:w-32 lg:h-32 md:w-32 md:h-32 w-20 h-20  rounded'>
                <img src={image_url} alt='course' />
              </div>
            </div>
            <div className='mx-4'>
              <div className='lg:flex md:flex flex-none justify-between items-center'>
                <div className='lg:mr-10 mr-4'>
                  <h1 className='lg:text-xl md:text-xl text-medium font-semibold text-wrap '>
                    {title.length > 20 ? title.slice(0, 20) + '...' : title}
                  </h1>

                  <p className='text-[#7b2cbf] hidden lg:inline-block md:inline-block'>
                    Updated: {last_updated}
                  </p>
                </div>
                <div className='inline-block lg:flex lg:gap-4 gap-2 items-center'>
                  <div className='lg:flex md:flex hidden'>
                    <StarIcon />
                    <p>{ratings}</p>
                  </div>
                  <div className='lg:flex md:flex hidden'>
                    <PeopleIcon />
                    <p>{enrolled_students}</p>
                  </div>
                  <div>
                    <p className='text-[#2a9d8f] font-semibold'>{price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </button>
      {/* End */}
    </div>
  );
};

export default AllPaidCourse;
