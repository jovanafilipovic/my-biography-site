import styled from "styled-components";

const HeaderWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`;

const HeaderText = styled.p`
  font-size: 1rem;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Jovana Filipovic</Heading>
      <HeaderText>Welcome to my personal page!</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
