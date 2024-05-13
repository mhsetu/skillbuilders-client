import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import { MdDelete } from 'react-icons/md';
import { AuthProvider } from '../../../Contexts/ContextProvider';

const CartItems = ({ items }) => {
  const { cart, setCart } = useContext(AuthProvider);
  const {
    id,
    title,
    enrolled_students,
    image_url,
    last_updated,
    price,
    ratings,
  } = items;

  const removeItem = (e) => {
    e.preventDefault();
    const items = cart.filter((item) => item.id !== id);
    setCart(items);
    localStorage.setItem('cart', JSON.stringify(items));
    console.log(items);
    // console.log('clicked');
  };

  //   console.log(items);
  return (
    <div>
      <div className='flex justify-center'>
        <button>
          <Link to={`/course/${id}`}>
            <div className=' w-[320px] lg:min-w-[600px] bg-base-100 shadow-md flex items-center mb-4 rounded-md lg:ml-10 md:ml-5 text-left'>
              <div className='avatar m-2'>
                <div className='lg:w-32 lg:h-32 md:w-32 md:h-32 w-20 h-20 rounded'>
                  <img src={image_url} alt='course_img' />
                </div>
              </div>
              <div>
                <div className='lg:flex md:flex flex justify-between items-center'>
                  <div className='lg:mr-10 '>
                    <h1 className='lg:text-xl md:text-xl text-medium font-semibold text-wrap '>
                      {title.length > 20 ? title.slice(0, 20) + '...' : title}
                    </h1>

                    <p className='text-[#7b2cbf] hidden lg:inline-block md:inline-block'>
                      Updated: {last_updated}
                    </p>
                    <p className='text-[#2a9d8f] font-semibold'>{price}</p>
                  </div>
                  <div className='grid lg:flex lg:gap-4 gap-2 items-center'>
                    <div className='lg:flex  hidden'>
                      <StarIcon />
                      <p>{ratings}</p>
                    </div>
                    <div className='lg:flex  hidden'>
                      <PeopleIcon />
                      <p>{enrolled_students}</p>
                    </div>
                    <gitdiv className='mr-3'>
                      <button
                        onClick={removeItem}
                        className='text-4xl bg-[#e76f51] rounded-full p-3 mt-2 hover:bg-[#f28482] inline-block lg:hidden md:hidden'
                      >
                        <MdDelete />
                      </button>
                    </div>
                    <div className='mr-5'>
                      <button
                        onClick={removeItem}
                        className='text-4xl bg-[#e76f51] rounded-full p-3 hover:bg-[#f28482] hidden lg:inline-block md:inline-block'
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartItems;
