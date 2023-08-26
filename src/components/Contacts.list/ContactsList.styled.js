import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 15px;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
