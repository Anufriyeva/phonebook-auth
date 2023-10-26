import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: #df3b01;
  font-size: 20px;
`;
export const UserName = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  font-style: italic;
`;

export const SubmitButton = styled.button`
  background-color: #df3b01;
  color: #fff;
  font-size: 18px;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff7f50;
  }
`;