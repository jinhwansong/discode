import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  type: string;
}

const Button = ({ children, type }: ButtonProps) => (
  <div>
    <StButton type={type}>{children}</StButton>
  </div>
);

export default Button;

const StButton = styled.button<ButtonProps>`
  border: 1px solid #b0c4de;
  border-radius: 4px;
  width: 100%;
  height: 35px;
  margin-top: 36px;
  background-color: #b0c4de;
`;
