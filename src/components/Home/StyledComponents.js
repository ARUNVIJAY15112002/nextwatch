import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props =>
    props.isLight === 'true' ? '#f8fafc' : '#000000'};
  min-height: 100vh;
  width: 100vw;
`
export const text = styled.p`
  margin: 1px;
`

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: Wrap;
  flex-direction: row;
  width: 80vw;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`
export const PremiumCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  background-size: cover;
  height: 200px;
  width: 100%;
`
export const PremiumCardItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 25px;
`
export const PrImage = styled.img`
  width: 130px;
  height: 32px;
`
export const Prbtn = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 8px;
  width: 110px;
  cursor: pointer;
`
export const PremiumClosebtn = styled.button`
  font-size: 25px;
  margin-right: 20px;
  align-self: flex-start;
  margin-top: 10px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
