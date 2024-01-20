import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  height: 12vh;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
  width: 100vw;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin-right: 30px;
  height: 50px;
  width: 200px;
  margin-top: 7px;
`
