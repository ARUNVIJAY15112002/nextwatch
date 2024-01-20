import {Component} from 'react'
import {
  BsMoon,
  BiSun,
  MdClose,
  GiHamburgerMenu,
  FiLogOut,
} from 'react-icons/all'

import FileContext from '../../context/FileContext'
import {
  Navbar,
  LogoutBtn,
  ProfileImage,
  NavImage,
  NavRightContainer,
  ModeButton,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme, changeTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'
          const imageUrl =
            siteTheme === 'Light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const changeThemeAll = () => {
            changeTheme()
          }
          const mode = siteTheme === 'Light' ? <BsMoon /> : <BiSun />
          return (
            <Navbar isLight={isLight}>
              <NavImage src={imageUrl} />
              <NavRightContainer>
                <li>
                  <ModeButton onClick={changeThemeAll} isLight={isLight}>
                    {mode}
                  </ModeButton>
                </li>
                <li>
                  {' '}
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>
                <li>
                  {' '}
                  <LogoutBtn isLight={isLight}>Logout</LogoutBtn>
                </li>
              </NavRightContainer>
            </Navbar>
          )
        }}
      </FileContext.Consumer>
    )
  }
}
export default Header
