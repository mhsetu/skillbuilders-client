import React, { useContext, useEffect, useState } from 'react';
import CartItems from './CartItems';
import { AuthProvider } from '../../../Contexts/ContextProvider';
import toast, { Toaster } from 'react-hot-toast';

const ShoppingCart = () => {
  const { cart } = useContext(AuthProvider);
  console.log(cart.length);

  const [newPrice, setNewPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);
  const notify = () => toast.success('Checkout Successfully.');

  useEffect(() => {
    setNewPrice(() => {
      return cart
        .reduce((a, b) => a + parseFloat(b.price.split('$')[1]), 0)
        .toFixed(2);
    });
  }, [cart]);

  useEffect(() => {
    setVat(() => {
      return parseFloat(newPrice * 0.15).toFixed(2);
    });
  }, [newPrice]);

  useEffect(() => {
    setTotal(() => {
      const totalCost = parseFloat(newPrice) + parseFloat(vat);
      return totalCost.toFixed(2);
    });
  }, [newPrice, vat]);

  console.log(total, vat, newPrice);

  return (
    <div
      className={`${
        cart.length === 0
          ? 'py-8 h-[400px]'
          : 'py-8 min-h-[700px] flex justify-center'
      }`}
    >
      <Toaster
        position='top-center'
        duration='4000'
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          success: {
            duration: 4000,
            style: {
              background: 'green',
              color: 'white',
            },
          },
        }}
        reverseOrder={false}
      />
      <div>
        <h1 className='ml-5 lg:ml-10 md:ml-10 my-8 text-3xl text-center lg:text-left md:text-left font-semibold'>
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className='ml-5 lg:ml-10 md:ml-10'>
            Please purchase some courses.
          </p>
        ) : (
          <div>
            {cart?.map((items) => (
              <CartItems items={items} key={items.id}></CartItems>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className=' lg:ml-10 md:ml-10 text-3xl font-semibold lg:mt-10 md:mt-10 mt-4 flex justify-center lg:hidden md:hidden mb-3'>
            <div className='flex bg-white rounded-md items-center justify-center px-5 w-[320px]'>
              <p className='text-xl font-semibold'>Total Amount: </p>
              {cart && (
                <p className='text-xl font-semibold text-[#2a9d8f] '>
                  ${total}
                </p>
              )}
              <div className='mt-5 ml-4'>
                <button onClick={notify} className='btn btn-primary mt-4 mb-10'>
                  {' '}
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='mt-[100px]'>
        {cart.length > 0 && (
          <div className='md:ml-8 ml-16 hidden lg:inline-block  md:inline-block bg-white max-h-[350px] min-w-[300px] p-10 rounded-md mr-4'>
            <p className='mb-8 text-3xl'>Summary</p>
            {cart && (
              <div>
                <div className='flex justify-between'>
                  <p className='text-xl mb-5 font-normal'>Total: </p>
                  <p className=' text-xl font-semibold text-[#2a9d8f]'>
                    ${' '}
                    {cart
                      .reduce(
                        (a, b) => a + parseFloat(b.price.split('$')[1]),
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-xl mb-5 font-normal'>Shipping: </p>
                  <p className=' text-xl font-semibold text-[#2a9d8f]'>
                    $ {vat}
                  </p>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <p className='text-xl mb-5 font-normal'>Payable: </p>
                  <p className=' text-xl font-semibold text-[#2a9d8f]'>
                    $ {total}
                  </p>
                </div>
              </div>
            )}
            <div>
              <button onClick={notify} className='btn btn-primary mt-4 mb-10'>
                {' '}
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
