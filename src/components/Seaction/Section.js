import { Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {children}
    </Wrapper>
  );
};
