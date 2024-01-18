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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
`

export const ListContainer = styled.ul`
  list-style: none;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`
export const ListContainer2 = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  background-color: blue;
  justify-content: flex-start;
`

export const ContactImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`

export const FootContainer = styled.div`
  margin-bottom: 20px;
`

export const ContactUsHead = styled.h1`
  color: '#94a3b8';
  font-size: 20px;
`

export const Card = styled.ul`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 10px;
`

export const ListItem = styled.li`
  margin-right: 20px;
`
