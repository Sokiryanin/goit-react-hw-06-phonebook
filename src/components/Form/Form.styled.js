import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: block;
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin-botoom: 10px;
  width: 360px;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 15px;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
