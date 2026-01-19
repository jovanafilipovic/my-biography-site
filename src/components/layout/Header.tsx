import styled from "styled-components";
import { PageTitle } from "../common/Headings";

const HeaderWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 2rem;
`;

const HeaderText = styled.p`
  font-size: 1rem;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <PageTitle>Jovana Filipovic</PageTitle>
      <HeaderText>Frontend Developer</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
