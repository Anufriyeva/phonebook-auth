import React from 'react';
import { useSelector } from 'react-redux'
import { getToken } from 'store/selectors';
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
const isAuth = useSelector(getToken)
const { state } = useLocation()
	return !isAuth ? children : <Navigate to={state ? state : '/'} />
}

export default PublicRoute;