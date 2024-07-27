import styled from "styled-components";

interface InputProps {
    id: string,
    type: string,
    placeholder: string,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ id, type, placeholder, label, value, onChange }: InputProps) {
    return (
        <div>
            <StLabel htmlFor={id}>{label}<StStar>*</StStar></StLabel>
            <StInput type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
export default Input

const StInput = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  outline:none;
`

const StLabel = styled.label`
  color:white;
  font-size:13px;
  font-weight: bold;
  display:flex;
  margin:0px;
  margin-top:20px;
  margin-bottom:10px;
`

const StStar = styled.div`
    color:red;
`




