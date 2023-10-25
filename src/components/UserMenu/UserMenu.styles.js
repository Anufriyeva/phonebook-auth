import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: #f08080;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #35abde;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0c7fb0;
  }
`;