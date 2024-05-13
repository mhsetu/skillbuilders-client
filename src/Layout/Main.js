import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <div className=' bg-[#d8e2dc] rounded-lg'>
          {/* <div className='bg-red-400'>01</div> */}
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
