import styled from 'styled-components'

interface ButtonProps{
  children:React.ReactNode,
  type:string
}

function Button({children,type}:ButtonProps) {
  return (
    <div>
    <StButton type={type}>{children}</StButton>
    </div>
  )
}

export default Button

const StButton = styled.button<ButtonProps>`
  border: 1px solid #B0C4DE;
  border-radius: 4px;
  width: 100%;
  height: 35px;
  margin-top: 36px;
  background-color: #B0C4DE;
`
