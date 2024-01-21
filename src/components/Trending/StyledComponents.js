import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props =>
    props.isLight === 'true' ? '#f8fafc' : '#000000'};

  min-height: 100vh;
  width: 100vw;
`

export const ListContainer = styled.ul`
  list-style: none;
  display:flex:
  flex-direction:column;
  width:80vw;
  @media screen and (max-width: 575px) {
    width: 100vw;
    margin-left:-47px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100vw;
  }
`
export const CardGaming = styled.div`
  display: flex;
  flex-direction: row;
  width: 82vw;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  //failure and loader
`

export const IMAGEFAILURE = styled.img`
  width: 180px;
  height: 180px;
  margin-left: -40px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 270px;
    margin-left: -40px;
  }
`
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 130px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 80%;
  margin-left: 0px;
  padding: 10px;
`

export const FAILUREHEAD = styled.h1`
  color: ${props => (props.isLight === 'true' ? 'black' : '#d7dfe9')};
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const FAILUREPARA = styled.p`
  color: ${props => (props.isLight === 'true' ? 'black' : '#d7dfe9')};
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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

export const Loadercontainer = styled.div`
  color: ${props => (props.isLight === 'true' ? 'black' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 80vw;
`
