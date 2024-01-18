import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;

 background-color: ${props => (props.isLight === 'true' ? 'pink' : 'black')}
  min-height: 100vh;
  width: 100vw;
`

export const ListContainer = styled.ul`
  list-style: none;
  display:flex:
  flex-direction:column;
  width:80vw;
`
