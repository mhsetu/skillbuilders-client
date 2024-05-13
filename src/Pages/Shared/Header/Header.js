import React, { useContext, useState } from 'react';
import skillicon from '../../../Assets/Skillicon.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Contexts/ContextProvider';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const { user, Logout, categoryData } = useContext(AuthProvider);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    // 👆 false parameter is required for react project
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleLogout = () => {
    Logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className='mb-2 mx-4 sticky top-0 z-10'>
      <div className='navbar bg-base-100 flex justify-between'>
        {/* start */}
        <div className='flex items-center gap-4'>
          {/* sidebar start  */}
          <div className='absolute lg:hidden md:hidden'>
            <label className='btn btn-circle swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input
                onClick={handleChecked}
                className='hidden'
                type='checkbox'
              />

              {/* hamburger icon */}
              <svg
                className='swap-off fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
              >
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>

              {/* close icon */}
              <svg
                className='swap-on fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
              >
                <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
              </svg>
            </label>
            <div
              className={`${
                check
                  ? 'w-28 mt-[40px] ml-[-50px] z-50 shadow-lg inline-flex'
                  : 'hidden'
              }`}
            >
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content absolute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to=''>Courses</Link>
                </li>
                <li>
                  <Link to='/FAQ'>FAQ</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <details>
                    <summary>Category</summary>
                    <ul className=' bg-base-100 rounded-t-none'>
                      {categoryData.map((data) => (
                        <div key={data.id} className='text-left text-wrap'>
                          <li>
                            <Link to={`/category/${data.id}`}>{data.name}</Link>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          {/* sidebar end */}

          {/* End */}
          <div className='flex items-center ml-16'>
            <img
              className='lg:w-[50px] w-[30px]'
              src={skillicon}
              alt='skill builder'
              altto=''
            />
            <div className='font-semibold lg:text-xl md:text-xl text-md ml-2 '>
              <Link to='/'>
                <p>Skill Builder</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex-none gap-2 '>
          <div className='flex items-center'>
            <div className='hidden lg:inline-block'>
              <Link className='mr-5' to='/'>
                Courses
              </Link>

              <Link to='/FAQ' className='mr-5'>
                FAQ
              </Link>

              <Link className='mr-5' to='/blog'>
                Blog
              </Link>
            </div>

            {user?.uid ? (
              <div>
                {user.photoURL ? (
                  <div>
                    <div className='dropdown dropdown-end mr-2'>
                      <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                      >
                        <div className='w-10 rounded-full'>
                          <img
                            alt='Tailwind CSS Navbar component'
                            src={user.photoURL}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                      >
                        <li>
                          <p className='justify-between text-[#9d4edd] font-semibold'>
                            {user.displayName}
                            <span className='badge'>New</span>
                          </p>
                        </li>
                        <li>
                          <Link to='/UserSettings'>
                            <p>Settings</p>
                          </Link>
                        </li>
                        <li>
                          <p onClick={handleLogout}>Logout</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className='dropdown dropdown-end mr-2'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle avatar'
                    >
                      <div className='avatar placeholder'>
                        <div className='bg-neutral text-neutral-content rounded-full w-10'>
                          <span>
                            {user?.displayName?.slice(0, 1).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                    >
                      <li>
                        <p className='justify-between text-[#9d4edd] font-semibold'>
                          {user.displayName}
                          <span className='badge'>New</span>
                        </p>
                      </li>
                      <li>
                        <Link to='/UserSettings'>
                          <p>Settings</p>
                        </Link>
                      </li>
                      <li>
                        <p onClick={handleLogout}>Logout</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className='hidden lg:inline-block md:inline-block'>
                <Link className='mr-5' to='/login'>
                  Login
                </Link>

                <Link className='mr-5' to='/register'>
                  SignUp
                </Link>
              </div>
            )}

            <label className='swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input
                className='hidden'
                onClick={handleToggle}
                type='checkbox'
              />

              {/* sun icon */}
              <svg
                className='swap-on fill-current w-10 h-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              {/* moon icon */}
              <svg
                className='swap-off fill-current w-10 h-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
