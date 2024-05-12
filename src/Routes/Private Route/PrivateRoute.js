import React, { useContext } from 'react';
import { AuthProvider } from '../../Contexts/ContextProvider';
import { Navigate, useLocation,  } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();

  if (loading) {
    return <div>Loading</div>;
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
