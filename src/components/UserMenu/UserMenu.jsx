import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { SubmitButton, Text, UserMenuContainer } from './UserMenu.styles';

const UserMenu = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    dispatch(logOut());
    deleteToken();
    navigate('/');
  };
  return (
<UserMenuContainer>
      <Text>Welcome {user.name} </Text>
      <SubmitButton type="button" onClick={handleClick}>
        LOGOUT
      </SubmitButton>
    </UserMenuContainer>
  );
};

export default UserMenu;