import styled from "styled-components"

interface ContainerProps {
    width: string
}

const StMainContainer = styled.div<ContainerProps>`
  border: 1px solid #444444;
  border-radius: 8px;
  width: ${props => props.width};
  background-color:#444444;
  padding:20px 40px;
`

export { StMainContainer }