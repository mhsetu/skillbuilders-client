import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProvider } from '../../Contexts/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { SignUpEmail, updateProfileInfo, setUser } = useContext(AuthProvider);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, Name, Password, Photo } = data;
    SignUpEmail(Email, Password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate('/');
        updateProfileInfo({
          displayName: Name,
          photoURL: Photo,
        }).catch((error) => {
          console.error(error);
        });
      })
      .catch((error) => console.error(error));
  };
  console.log(errors);

  //   const handleSignUp=()=>{

  //   }
  return (
    <div>
      {/* <h1>Register</h1> */}
      {/* <form
        className='w-[500px] mx-auto my-12'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
          </svg>
          <input
            type='text'
            className='grow'
            placeholder='Your name'
            {...register('Name', { required: true })}
          />
        </label>

        <label className='input input-bordered flex items-center gap-2 my-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
            <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
          </svg>
          <input
            type='text'
            className='grow'
            placeholder='Email'
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </label>

        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
              clipRule='evenodd'
            />
          </svg>
          <input
            type='password'
            className='grow'
            {...register('Password', { required: true })}
          />
        </label>

        {/* <button className='btn btn-outline btn-primary'>Primary</button> */}
      {/* <input className='btn btn-outline btn-primary mt-5' type='submit' />
      </form> */}

      <div className='hero min-h-screen bg-base-200 mb-4'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
            <p className='py-6 text-wrap'>
              Skills are seeds; nurture them with practice, and watch them grow
              into mastery.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='input input-bordered'
                  {...register('Name', { required: true })}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo</span>
                </label>

                <input
                  className='input input-bordered'
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
                  placeholder='Email'
                  className='input input-bordered'
                  {...register('Email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  className='input input-bordered'
                  {...register('Password', { required: true })}
                />
                <label className='label'>
                  <p className='label-text-alt link link-hover text-left'>
                    Already have an account? please{' '}
                    <Link to='/login'>Login</Link>
                  </p>
                </label>
              </div>
              <div className='form-control'>
                <input
                  className='btn btn-outline btn-primary mt-5'
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
