import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
`
export const LogoutBtn = styled.button`
  color: ${props => (props.isLight === 'true' ? ' #3b82f6' : ' #ffffff')};
  border: ${props =>
    props.isLight === 'true' ? '1px solid  #3b82f6' : '1px solid  #ffffff'};
  background-color: transparent;
  padding: 4px;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 10px;
`
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 12px;
  margin-right: 12px;
`
export const NavImage = styled.img`
  width: 120px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const NavRightContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`
