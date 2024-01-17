import styled from 'styled-components'

export const BgContainer = styled.div`
   background-color: ${props =>
     props.isLight === 'true' ? ' pink' : ' #212121'}
    
  height: 100vh;
`
export const text = styled.p`
  margin: 1px;
`
