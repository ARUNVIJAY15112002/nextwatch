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
  width: 82vw;
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
export const Input = styled.input`
  width: 380px;
  height: 30px;
  border: 0px;
  background-color: transparent;
`
export const InputContainer = styled.div`
  width: 380px;
  height: 30px;
  border: 1px solid #475569;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
  color: white;
`

export const Icon = styled.div`
  border-left: 1px solid #475569;
  width: 55px;
  font-size: 17px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 5px;
  justify-content: center;
  color: #475569;
`

export const Loadercontainer = styled.div`
  margin-top: 140px;
  align-self: center;
  margin-left: 160px;

  color: ${props => (props.isLight === 'true' ? 'black' : '#ffffff')};
`

export const IMAGEFAILURE = styled.img`
  width: 270px;
  height: 270px;
  margin-left: -40px;
`
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 130px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`

export const FAILUREHEAD = styled.h1`
  color: ${props => (props.isLight === 'true' ? 'black' : '#d7dfe9')};
  font-size: 25px;
`
export const FAILUREPARA = styled.h1`
  color: ${props => (props.isLight === 'true' ? 'black' : '#d7dfe9')};
  font-size: 20px;
`
export const RButton = styled.button`
  color: white;
  background-color: #4f46e5;
  padding: 8px;
  cursor: pointer;
  width: 80px;
  height: 34px;
  border: 0px;
`
