import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { SubmitButton, Text, UserMenuContainer, UserName } from './UserMenu.styles';
import { deleteToken, logOut } from 'store/thunk';
import { getUserData } from 'store/selectors';

const UserMenu = () => {
  const {name} = useSelector(getUserData);
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
      <Text>Welcome</Text>
      <UserName>{name}</UserName>
      <SubmitButton type="button" onClick={handleClick}>
        LOGOUT
      </SubmitButton>
    </UserMenuContainer>
  );
};

export default UserMenu;