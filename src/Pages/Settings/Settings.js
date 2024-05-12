import React, { useContext, useRef } from 'react';
import { AuthProvider } from '../../Contexts/ContextProvider';

import { useForm } from 'react-hook-form';

const Settings = () => {
  const { updateProfileInfo, user } = useContext(AuthProvider);

  const emailRef = useRef(user?.email);
  const nameRef = useRef(user?.displayName);
  const photoRef = useRef(user?.photoURL);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Name, Photo } = data;

    updateProfileInfo({
      displayName: Name,
      photoURL: Photo,
    }).catch((error) => {
      console.error(error);
    });
  };
  console.log(errors);
  return (
    <div className='  lg:min-h-[600px] md:min-h-[600px] min-h-[500px] lg:max-w-[600px] md:max-w-[600px] mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className='pt-16 px-4'>
        <div className='bg-[#edf2f4] p-8 rounded shadow-xl'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              ref={nameRef}
              defaultValue={user?.displayName}
              placeholder='Your Name'
              className='input input-bordered '
              {...register('Name', { required: true })}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Photo</span>
            </label>

            <input
              className='input input-bordered '
              ref={photoRef}
              defaultValue={user?.photoURL}
              type='url'
              placeholder='PhotoUrl'
              {...register('Photo')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              readOnly
              ref={emailRef}
              defaultValue={user?.email}
              placeholder='Email'
              className='input input-bordered '
              {...register('Email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>

          <div className='flex justify-center'>
            <input
              className='btn btn-outline btn-primary mt-5 text-center'
              type='submit'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
