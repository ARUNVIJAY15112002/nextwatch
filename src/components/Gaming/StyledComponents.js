import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.isLight === 'true' ? '#f8fafc' : '#000000'};
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  width: 80vw;
  margin-left: 15px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardGaming = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props =>
    props.isLight === 'true' ? '#ebebeb' : ' #0f0f0f'};
  margin-bottom: 30px;
`
export const Logo = styled.div`
  color: red;
  font-size: 28px;
  background-color: ${props =>
    props.isLight === 'true' ? '#d7dfe9' : 'black'};

  border-radius: 70px;
  width: 60px;
  height: 60px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px;
  margin-right: 16px;
  margin-left: 24px;
`

export const H1 = styled.h1`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  margin-top: 25px;
`
