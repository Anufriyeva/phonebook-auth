import React, { lazy } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import {AppContainer} from './App.styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { getError, getIsLoading } from 'store/selectors';
// import { fetchContacts } from 'store/thunk';
import { Route, Routes } from 'react-router';
import Layout from './Layout/layout';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  
  return (
    <AppContainer>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
      </Route>
    </Routes>
    </AppContainer>
    
  );
};

export default App;