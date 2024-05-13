import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProvider } from '../../Contexts/ContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
// import { signInWithPopup } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const { SignInEmail, setUser, googleSignIn, githubSignIn } =
    useContext(AuthProvider);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, Password } = data;
    SignInEmail(Email, Password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success('Successfully Login!');
        navigate(location?.state?.from?.pathname || '/', { replace: true });
      })
      .catch((eror) => {
        console.error(eror.message);
        if (eror.message === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('Incorrect email or password');
        } else {
          toast.error(eror.message);
        }
        // toast.error(eror.message);

        // toast.error(errors);
      });
    console.log(data);
  };
  console.log(errors);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success('Successfully Login!');
        navigate(location?.state?.from?.pathname || '/', { replace: true });
      })
      .catch((eror) => {
        console.error(eror);
        if (eror.message === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('Incorrect email or password');
        } else {
          toast.error(eror.message);
        }
        // toast.error(eror.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success('Successfully Login!');
        navigate(location?.state?.from?.pathname || '/', { replace: true });
      })
      .catch((eror) => {
        console.error(eror);

        if (eror.message === 'Firebase: Error (auth/invalid-credential).') {
          toast.error('Incorrect email or password');
        } else {
          toast.error(eror.message);
        }
        // toast.error(eror.message);
      });
  };

  // console.log(handleGoogleSignIn);

  return (
    <div>
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
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />

      {/* <h1>Login</h1> */}
      <div className='hero min-h-screen bg-base-200 mb-4'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold px-12'>Login now!</h1>
            <p className='py-6 px-12'>
              Skill development is the bridge between potential and performance,
              the pathway to mastery. It's not just about acquiring knowledge
              but honing it through relentless practice, refining each action
              until excellence becomes instinctual.
            </p>
            <div className='flex justify-center gap-2'>
              <button
                onClick={handleGoogleSignIn}
                className='btn btn-outline btn-error px-8'
              >
                <FaGoogle />
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className='btn btn-outline btn-neutral px-8'
              >
                <FaGithub />
                Github
              </button>
            </div>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
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
                  placeholder='password'
                  className='input input-bordered'
                  {...register('Password', { required: true })}
                />
                {/* <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className='form-control mt-6'>
                {/* <button className='btn btn-primary' type='submit'>
                  Login
                </button> */}
                <input className='btn btn-primary mb-4' type='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <form
        className='w-[500px] mx-auto my-12'
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <button className='btn btn-outline btn-primary'>Primary</button>
        <input className='btn btn-outline btn-primary mt-5' type='submit' />
      </form> */}
    </div>
  );
};

export default Login;
