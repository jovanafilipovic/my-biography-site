import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterWrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #eaeaea;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  display: flex;
  margin: 0.3rem 0;
  color: #333;
  font-size: 1rem;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #0077ff;
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #005bbb;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <EmailIcon />
        <FooterLink href="mailto:jovana.fil.1998@gmail.com">
          jovana.fil.1998@gmail.com
        </FooterLink>
      </FooterText>
      <FooterText>
        <LinkedInIcon />
        <FooterLink
          href="https://www.linkedin.com/in/jovanaafilipovic/"
          target="_blank"
        >
          https://www.linkedin.com/in/jovanaafilipovic/
        </FooterLink>
      </FooterText>
      <FooterText>
        <GitHubIcon />
        <FooterLink href="https://github.com/jovanafilipovic" target="_blank">
          https://github.com/jovanafilipovic
        </FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
