import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'
import { getToken } from 'store/selectors';

const PrivateRoute = ({ children }) => {
const isAuth = useSelector(getToken);
const location = useLocation()
  return isAuth ? children : <Navigate to="/login" state={location}/>;
};

export default PrivateRoute;
