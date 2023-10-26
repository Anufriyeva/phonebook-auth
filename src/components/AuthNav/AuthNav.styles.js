import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #df3b01;
  font-size: 20px;
  /* transition: all 0.2s ease;  */

  &:hover {
    color: #ff7f50;
    font-size: 21px;
  }
`;