import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #df3b01;
  font-size: 20px;

  &:hover {
    color: #ff7f50;
    font-size: 21px;
  }
`;