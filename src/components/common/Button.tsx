import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  background-color: ${(props) =>
    props.variant === "secondary" ? "#555" : "#0077ff"};
  color: white;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#333" : "#005bbb"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  children,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
