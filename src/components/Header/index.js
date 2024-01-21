import {Component} from 'react'
import './index.css'

import {Link} from 'react-router-dom'
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
  NavRightContainer2,
  NavContainer,
  Hr,
  MenuItems,
  NavUl,
} from './styledComponents'

class Header extends Component {
  state = {showHeader: false}

  showMenu = () => {
    const {showHeader} = this.state

    this.setState(prevState => ({showHeader: !prevState.showHeader}))
  }

  render() {
    return (
      <FileContext.Consumer>
        {value => {
          const {showHeader} = this.state
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
            <>
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
                <NavRightContainer2>
                  <li>
                    <ModeButton onClick={changeThemeAll} isLight={isLight}>
                      {mode}
                    </ModeButton>
                  </li>

                  <li>
                    <ModeButton isLight={isLight} onClick={this.showMenu}>
                      <GiHamburgerMenu />
                    </ModeButton>
                  </li>
                  <li>
                    <ModeButton isLight={isLight}>
                      <FiLogOut />
                    </ModeButton>
                  </li>
                </NavRightContainer2>
              </Navbar>
              {showHeader && (
                <NavContainer isLight={isLight}>
                  <NavUl>
                    <Link to="/Home" className="link">
                      <MenuItems isLight={isLight}>Home</MenuItems>
                    </Link>
                    <Hr />
                    <Link to="/Trending" className="link">
                      <MenuItems isLight={isLight}>Trending</MenuItems>
                    </Link>
                    <Hr />
                    <Link to="/Gaming" className="link">
                      <MenuItems isLight={isLight}>Gaming</MenuItems>
                    </Link>
                    <Hr />
                    <Link to="/Home" className="link">
                      <MenuItems isLight={isLight}>Saved Videos</MenuItems>
                    </Link>
                  </NavUl>
                </NavContainer>
              )}
            </>
          )
        }}
      </FileContext.Consumer>
    )
  }
}
export default Header
