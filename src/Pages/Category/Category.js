import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../Shared/CategoryDetails/CategoryDetails';
import RandomCourse from '../Shared/Random Course/RandomCourse';

export const CategoryDetailsProvider = createContext();
const Category = () => {
  const categories = useLoaderData();
  const { id } = categories;
  console.log(id);
  console.log(categories);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch('https://skillbuilders-server.vercel.app/course')
      .then((res) => res.json())
      .then((data) => setCategoryData(data.courses));
  }, []);
  console.log(categoryData);

  const filterCategory = categoryData.filter((c) => c.category_id === id);

  return (
    <div className='flex pb-10 justify-center'>
      <div className='sticky h-[400px]  top-[140px] hidden lg:ml-5 md:mx-2 md:inline-block lg:inline-block md:mt-[55px] mt-[70px] md:mb-5'>
        <RandomCourse></RandomCourse>
      </div>
      <div className='lg:col-span-3 md:col-span-3 col-span-4 lg:mx-2  '>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 md:gap-2 gap-4 mt-[48px]'>
          {filterCategory.map((category) => (
            <CategoryDetailsProvider.Provider
              key={category.id}
              value={category}
            >
              <CategoryDetails></CategoryDetails>
            </CategoryDetailsProvider.Provider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
