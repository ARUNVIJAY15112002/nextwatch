import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 200px;
  height: 350px;
`

export const Image = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 6px;
`

export const Title = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 16px;
  margin-top: 5px;
`
export const Views = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#1e293b')};
  font-size: 14px;
  margin-top: -10px;
`
