import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 200px;
  height: 350px;
  @media screen and (max-width: 575px) {
    width: 42%;

    margin-left: 20px;
    height: 300px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 40%;
    margin-left: 0px;

    height: 300px;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 6px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }
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
