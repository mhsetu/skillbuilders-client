import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/ContextProvider';

const RandomCourse = () => {
  const { setCategoryData, categoryData } = useContext(AuthProvider);
  useEffect(() => {
    fetch('https://skillbuilders-server.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);
  console.log(categoryData);

  return (
    <div className='stats stats-vertical text-center shadow min-w-[180px] lg:w-[250px] max-h-[500px]'>
      {categoryData.map((category) => (
        <div key={category.id}>
          {/* <h1>{category.name}</h1> */}
          <div className='stat hover:bg-[#7161ef] hover:text-white'>
            <Link to={`/category/${category.id}`}>
              <button className='  md:text-wrap lg:text-nowrap '>
                {category.name}
              </button>
            </Link>
          </div>
        </div>
      ))}
      {/* <div className='stats stats-vertical shadow w-[300px]'>
        <div className='stat'>
          <div className='stat-title'>Downloads</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>New Users</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>New Registers</div>
        </div>
      </div> */}
    </div>
  );
};

export default RandomCourse;
