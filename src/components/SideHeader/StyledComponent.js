import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
`

export const HeaderButton = styled.nav`
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`

export const HeaderContainer = styled.div`
  width: 19vw;
  min-height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
  @media (min-width: 768px) {
    display: flex;
  }
`

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin-left: -10px;
`
export const ListContainer2 = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -44px;
`

export const ContactImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 17px;
`

export const FootContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 1px;
`

export const ContactUsHead = styled.h1`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#f1f1f1')};
  font-size: 17px;
  margin-left: 14px;
`

export const ListPara = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 14px;
  margin-top: 7px;
  font-weight: ${props => props.fontWeight};
`
export const FootPara = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 16px;
  margin-top: 1px;
  width: 200px;
  margin-left: 14px;
`

export const Card = styled.div`
  display: flex;
  font-size: 18px;
  display: column;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin-bottom: 7px;
  background-color: ${props => props.Cardbg};
  border-width: 0px;
  cursor: pointer;
  width: 233px;
  padding: 5px;
`

export const ListItem = styled.div`
  margin-right: 20px;
  color: ${props => props.iconTheme};
`
