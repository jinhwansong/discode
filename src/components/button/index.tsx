import * as St from './button.module';

interface IButton {
  onClick: () => void;
  children: string;
  type: 'button' | 'submit';
}

const Button = ({ onClick, children, type }: IButton) => (
  <St.Button type={type} onClick={onClick}>
    {children}
  </St.Button>
);

export default Button;
