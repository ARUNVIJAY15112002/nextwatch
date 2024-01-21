import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.isLight === 'true' ? '#f8fafc' : '#000000'};
`
export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  width: 80vw;
  margin-left: 15px;
  @media screen and (max-width: 575px) {
    width: 100vw;
    margin-left: -25px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100vw;
    margin-left: 25px;
  }
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
  @media screen and (max-width: 575px) {
    width: 100vw;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100vw;
  }
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
