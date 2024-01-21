import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  height: 8vh;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
  width: 100vw;
  @media screen and (min-width: 768px) {
    height: 12vh;
  }
`
export const LogoutBtn = styled.button`
  color: ${props => (props.isLight === 'true' ? ' #3b82f6' : ' #ffffff')};
  border: ${props =>
    props.isLight === 'true' ? '1px solid  #3b82f6' : '1px solid  #ffffff'};
  background-color: transparent;
  padding: 4px;
  cursor: pointer;
  margin-bottom:25px
  padding-right: 15px;
  width:80px;

`
export const ModeButton = styled.button`
  color: ${props => (props.isLight === 'true' ? 'black' : '#ffffff')};
  background-color: transparent;
  border-width: 0px;
  font-size: 20px;
  margin-top: 5px;
  cursor: pointer;
  margin-left: 7px;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 5px;
`
export const NavImage = styled.img`
  width: 110px;
  height: 30px;
  margin-top: 19px;
  margin-left: 25px;
  margin-bottom: 10px;
`

export const NavRightContainer = styled.ul`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin-right: 30px;
  height: 50px;
  width: 200px;
  margin-top: 7px;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const NavRightContainer2 = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin-right: -35px;
  height: 50px;
  width: 200px;
  margin-top: 7px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const NavContainer = styled.div`
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
  display: flex;
  margin-top: -10px;
  margin-bottom: 0px;
  text-decoration: none;
  list-style: none;
  height: 170px;
  width: 100vw;
  @media (min-width: 767px) {
    display: flex;
  }
`
export const Hr = styled.hr`
  width: 80%;
  align-self: flex-start;
  margin-right: 100px;
`
export const NavUl = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const MenuItems = styled.li`
  color: ${props => (props.isLight === 'true' ? '#212121' : '#ffffff')};
`
