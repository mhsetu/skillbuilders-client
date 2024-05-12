import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import CourseDetails from '../../Pages/Shared/CourseDetails/CourseDetails';
// import { Login } from '@mui/icons-material';
import Register from '../../Pages/Register/Register';
import Login from '../../Pages/Login/Login';
import Blog from '../../Pages/Blog/Blog';
import PrivateRoute from '../Private Route/PrivateRoute';
import Settings from '../../Pages/Settings/Settings';
import RandomCourse from '../../Pages/Shared/Random Course/RandomCourse';
import Category from '../../Pages/Category/Category';
import Error from '../../Pages/Error/Error';
import AboutUs from '../../Pages/About Us/AboutUs';
import FAQ from '../../Pages/FAQ/FAQ';
import ShoppingCart from '../../Pages/Shared/ShoppingCart/ShoppingCart';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        // element: <ContextProvider></ContextProvider>,
        // element: <AllPaidCourse></AllPaidCourse>,
        element: <Home></Home>,
        loader: () => fetch('https://skillbuilders-server.vercel.app/course'),
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('https://skillbuilders-server.vercel.app/course'),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/FAQ',
        element: <FAQ></FAQ>,
      },
      {
        path: '/ShoppingCart',
        element: (
          <PrivateRoute>
            <ShoppingCart></ShoppingCart>
          </PrivateRoute>
        ),
      },
      {
        path: '/UserSettings',
        element: (
          <PrivateRoute>
            <Settings></Settings>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://skillbuilders-server.vercel.app/course/${params.id}`),
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://skillbuilders-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: '/',
        element: <RandomCourse></RandomCourse>,
        loader: () =>
          fetch('https://skillbuilders-server.vercel.app/categories'),
      },
    ],
  },
]);
