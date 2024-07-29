import * as St from './input.module';

interface IInput {
  value: string;
  onChange: (
    e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder:string;
}

const Input = ({ value, onChange, placeholder }: IInput) => (
  <St.Input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
