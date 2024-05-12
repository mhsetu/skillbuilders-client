import React, { useContext } from 'react';
import { CourseProvider } from '../../Home/Home/Home';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Course = () => {
  const course = useContext(CourseProvider);
  const {
    id,
    title,
    image_url,
    description,
    instructor,
    duration,
    level,
    enrolled_students,
    ratings,
    price,
  } = course;

  return (
    <div>
      <div>
        <div className='card w-82 bg-base-100 max-h-[500px] shadow-xl md:mx-2 mx-4 my-6 md:my-2 '>
          <figure>
            <img
              className=' h-[250px] w-[380px]'
              src={image_url}
              alt='Courses'
            />
          </figure>
          <div className='mx-8 mt-3'>
            <h2 className=' text-left text-xl'>
              {title ? title.slice(0, 15) + '...' : title}
            </h2>
            <p className='text-sm text-left text-slate-500 my-1'>
              {instructor}
            </p>
            <div className='text-left hidden lg:inline-block mb-1'>
              <p>
                {description ? description.slice(0, 30) + '...' : description}
              </p>
            </div>

            <p className='text-left'>
              {ratings}
              <span>
                <StarIcon className='text-xs' />
              </span>
              ({enrolled_students})
            </p>
            <p className='text-left font-medium'>{level}</p>
            <div className='card-actions justify-end mt-3 mb-5 lg:mb-8'>
              <Link to={`course/${id}`}>
                <button className='btn btn-primary'>Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
